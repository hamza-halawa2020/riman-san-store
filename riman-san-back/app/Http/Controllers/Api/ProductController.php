<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\ProductResource;
use Exception;
use App\Http\Requests\StoreProductRequest;
use Gate;
use App\Http\Requests\UpdateProductRequest;


class ProductController extends Controller
{
    function __construct()
    {
        $this->middleware("auth:sanctum")->except(["index", "show", "indexByCategory"]);
    }

    public function index()
    {
        try {
            $products = Product::paginate(10);
            return ProductResource::collection($products);
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }

    public function indexByCategory($category)
    {
        try {
            $products = Product::whereHas('category', function ($query) use ($category) {
                $query->where('id', $category);
            })->get();
            // return response()->json($products);
            return new ProductResource($products);

        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }

    public function store(StoreProductRequest $request)
    {
        try {
            $this->validate($request, [
                'name' => 'required|string|unique:products',
                'description' => 'required|string',
                'img' => 'required',
                'price' => 'required',
                'category_id' => 'required',
            ]);
            // if (Gate::allows("is-admin")) {
            $product = Product::create($request->all());
            return response()->json(['data' => new ProductResource($product)], 200);
            // } else {
            //     return response()->json(['message' => 'not allow to update product.'], 403);
            // }
        } catch (Exception $e) {
            return response()->json($e, 500);
        }

    }

    public function show(string $id)
    {
        try {
            $product = Product::findOrFail($id);
            return new ProductResource($product);
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }

    public function update(UpdateProductRequest $request, string $id)
    {
        try {
            $this->validate($request, [
                'name' => 'required|string',
                'description' => 'required|string',
                'img' => 'required',
                'price' => 'required',
                'category_id' => 'required',
            ]);
            // if (Gate::allows("is-admin")) {
            $product = Product::findOrFail($id);
            $product->update($request->all());
            return response()->json(['data' => new ProductResource($product)], 200);
            // } else {
            //     return response()->json(['message' => 'not allow to update product.'], 403);
            // }
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }

    public function destroy(string $id)
    {
        try {
            // if (Gate::allows("is-admin")) {
            $product = Product::findOrFail($id);
            $product->delete();
            return response()->json(['data' => 'Category deleted successfully'], 200);
            // } else {
            //     return response()->json(['message' => 'not allow to delete product.'], 403);
            // }
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }
}