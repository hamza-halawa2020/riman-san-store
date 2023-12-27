<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use App\Http\Resources\OrderDetailsResource;
use App\Models\Order_details;
use App\Http\Requests\StoreOrderDetailsRequest;
use Gate;
use Exception;







class OrderDetailsController extends Controller
{
    function __construct()
    {
        $this->middleware("auth:sanctum")->except(['store']);
    }
    public function index()
    {
        try {
            if (Gate::allows("is-admin")) {
            $orders = Order_details::all();
            return OrderDetailsResource::collection($orders);
            } else {
            return response()->json(['message' => 'not allow to show orders.'], 403);
            }
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
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
