<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Image;
use App\Http\Resources\ProductResource;
use Exception;
use App\Http\Requests\StoreProductRequest;
use Illuminate\Support\Facades\Gate;
// use Gate;
use App\Http\Requests\UpdateProductRequest;


class ProductController extends Controller
{
    // function __construct()
    // {
    //     $this->middleware("auth:sanctum")->except(["index", "show", "indexByCategory"]);
    // }

    public function index()
    {
        try {
            // $products = Product::all();
            $products = Product::with('images.product')->get();

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
    // try {
        $data = $request->only([
            'name',
            'description',
            'price',
            'category_id',
        ]);

        $categoryId = $request->input('category_id');

        $product = Product::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'price' => $data['price'],
            'category_id' => $categoryId,
        ]);



        // if ($request->hasFile('image')) {
        //     $uploadPath = public_path('image');
        //     foreach ($request->file('image') as $imageFile) {
        //         $extension = $imageFile->getClientOriginalExtension();
        //         $filename = time() . '.' . $extension;
        //         $imageFile->move($uploadPath, $filename);
        //         $finalImagePathName = $uploadPath . '/' . $filename;
        
        //         $product->images()->create([
        //             'product_id' => $product->id,
        //             'image' => $finalImagePathName,
        //         ]);
        //     }
        // }
        
        if ($request->hasFile('image')) {
            foreach ($request->file('image') as $image) {
                $extension = $image->getClientOriginalExtension();
                $filename = time() . '_' . uniqid() . '.' . $extension;
                $image->move(public_path('images'), $filename);
        
                $product->images()->create([
                    'product_id' => $product->id,
                    'image' => 'images/' . $filename,
                ]);
            }
        }
        


        $product->load('images');

        // $product->load('images.product');
        return response()->json(['data' => new ProductResource($product)], 201);
    // } catch (Exception $e) {
    //     return response()->json(['error' => 'Internal Server Error'], 500);
    // }

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
            $this->validate($request, [
                'name' => 'required|string',
                'description' => 'required|string',
                'img' => 'required',
                'price' => 'required',
                'category_id' => 'required',
            ]);
            if (Gate::allows("is-admin")) {
            $product = Product::findOrFail($id);
            $product->update($request->all());
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