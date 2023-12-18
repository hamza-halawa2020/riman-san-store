<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\ProductResource;

class ProductController extends Controller
{
    // function __construct()
    // {
    //     $this->middleware("auth:sanctum")->except(["index", "show"]);
    // }

    public function index()
    {
        try {

            $products = Product::all();
            return ProductResource::collection($products);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while showing products.'], 500);
        }
    }

    public function indexByCategory($category)
    {
        $products = Product::whereHas('category', function ($query) use ($category) {
            $query->where('id', $category);
        })->get();
        return response()->json($products);
    }
    // public function indexByCategory()
    // {
    //     $categoryName = 'Category 1'; // Replace 'Category 1' with the actual name of category 1
    //     $products = Product::whereHas('category', function ($query) use ($categoryName) {
    //         $query->where('name', $categoryName);
    //     })->get();

    //     return response()->json($products);
    // }



    public function store(Request $request)
    {

    }

    public function show(string $id)
    {
        try {
            $product = Product::findOrFail($id);
            return new ProductResource($product);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while showing product.'], 500);
        }
    }

    public function update(Request $request, string $id)
    {

    }

    public function destroy(string $id)
    {

    }
}
