<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\ProductResource;
use Exception;
use App\Http\Requests\StoreProductRequest;
use Illuminate\Support\Facades\Gate;
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
            $products = Product::with('images.product')->get();
            return ProductResource::collection($products);
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }

    public function indexByCategory($id)
    {
        try {
            $products = Product::where('category_id', $id)->with('images')->get();
            return ProductResource::collection($products);
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }

    public function store(StoreProductRequest $request)
    {
        try {
            $product = $request->validated();
            if (Gate::allows("is-admin")) {
                $categoryId = $request->input('category_id');
                $product = Product::create([
                    'name' => $request->name,
                    'description' => $request->description,
                    'price' => $request->price,
                    'category_id' => $categoryId,
                ]);
                if ($request->hasFile('image')) {
                    foreach ($request->file('image') as $image) {
                        $extension = $image->getClientOriginalExtension();
                        $filename = time() . '_' . uniqid() . '.' . $extension;
                        $folderPath = 'images/products/' . $product->id;
                        $image->move(public_path($folderPath), $filename);
                        $product->images()->create([
                            'product_id' => $product->id,
                            'image' => $folderPath . '/' . $filename,
                        ]);
                    }
                }
                return response()->json(['data' => new ProductResource($product)], 201);
            } else {
                return response()->json(['message' => 'not allow to delete product.'], 403);
            }
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }

    public function show(string $id)
    {
        try {
            $product = Product::with('images.product')->findOrFail($id);
            return new ProductResource($product);
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }

    public function update(UpdateProductRequest $request, string $id)
    {
        try {
            $product = Product::findOrFail($id);
            $data = $request->validated();
            if (Gate::allows("is-admin")) {
                $product->update([
                    'name' => $data['name']?? $product->name,
                    'description' => $data['description']?? $product->description,
                    'price' => $data['price']?? $product->price,
                    'category_id' => $data['category_id']?? $product->category_id,
                ]);
                return response()->json(['data' => new ProductResource($product)], 200);
            } else {
                return response()->json(['message' => 'not allow to update product.'], 403);
            }
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }

    public function destroy(string $id)
    {
        try {
            if (Gate::allows("is-admin")) {
                $product = Product::findOrFail($id);
                $product->delete();
                return response()->json(['data' => 'Category deleted successfully'], 200);
            } else {
                return response()->json(['message' => 'not allow to delete product.'], 403);
            }
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }
}
