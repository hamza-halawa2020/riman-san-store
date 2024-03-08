<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Http\Requests\StoreOrderRequest;
use Illuminate\Support\Facades\Gate;
use Exception;

class OrderController extends Controller
{
    function __construct()
    {
        $this->middleware("auth:sanctum")->except(['store']);
    }


    public function index()
    {
        try {
            if (Gate::allows("is-admin")) {
                $orders = Order::with('Order_details.product')->all();

                return OrderResource::collection($orders);
            } else {
                return response()->json(['message' => 'not allow to show orders.'], 403);
            }
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }


    public function store(StoreOrderRequest $request)
    {
        try {
            $order = $request->validated();
            $order = Order::create([
                'name' => $request->name,
                'address' => $request->address,
                'phone' => $request->phone,
                'city' => $request->city,
                'notes' => $request->notes,
            ]);
            $orderDetailsData = $request->input('order_details');
            foreach ($orderDetailsData as $detailData) {
                $order->Order_details()->create([
                    'product_id' => $detailData['product_id'],
                    'quantity' => $detailData['quantity'],
                ]);
            }
            $order->load('order_details.product');
            return response()->json(['data' => new OrderResource($order)], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function show($orderId)
    {
        try {
            $order = Order::with('Order_details.product')->findOrFail($orderId);
            return new OrderResource($order);
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }


    public function update(Request $request, string $id)
    {
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            if (Gate::allows("is-admin")) {
                $Order = Order::findOrFail($id);
                $Order->delete();
                return response()->json(['message' => 'Order deleted successfully'], 200);
            } else {
                return response()->json(['message' => 'not allow to show Order.'], 403);
            }
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }
}
