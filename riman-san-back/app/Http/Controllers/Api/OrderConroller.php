<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Http\Requests\StoreOrderRequest;
use Gate;

class OrderConroller extends Controller
{
    function __construct()
    {
        $this->middleware("auth:sanctum");
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
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while showing orders.'], 500);
        }
    }

    public function store(StoreOrderRequest $request)
    {
        try {
            $order = Order::create($request->all());
            return response()->json(['data' => new OrderResource($order)], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while creating the order'], 500);
        }
    }

    public function show(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
