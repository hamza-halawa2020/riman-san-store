<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\ProductResource;

class ProductController extends Controller
{
    function __construct()
    {
        $this->middleware("auth:sanctum")->except(["index", "show"]);
    }

    public function index()
    {
        try {

            $products = Product::all();
            return ProductResource::collection($products);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while showing products.'], 500);
        }
    }


    public function store(Request $request)
    {

    }

    public function show(string $id)
    {
        try {
            $product = Product::findOrFail($id);
            return new ProductResource($product);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while showing reviews.'], 500);
        }
    }

    public function update(Request $request, string $id)
    {

    }

    public function destroy(string $id)
    {

    }
}
