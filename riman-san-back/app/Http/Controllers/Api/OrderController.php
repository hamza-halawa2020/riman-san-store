<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Http\Requests\StoreOrderRequest;
use Gate;
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
            $orders = Order::all();
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
        $orderData = $request->all();
        $order = Order::create($orderData);
        return response()->json(['data' => new OrderResource($order)], 200);
        } catch (Exception $e) {
        return response()->json($e, 500);
    }
    }

    public function show(string $id)
    {
        try {
            $order = Order::findOrFail($id);
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
        //
    }
}
