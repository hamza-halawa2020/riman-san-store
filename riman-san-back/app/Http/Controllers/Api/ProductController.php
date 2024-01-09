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



//     public function store(StoreProductRequest $request)
//     {
//         // try {
//             // if (Gate::allows("is-admin")) {
//             $data = $request->all();
//             $categoryId = $request->input('category_id');
            
//             // $imgName = $request->name;
//             $path = 'img/products/';
//             $productFolder = public_path($path);   
//             if (!is_dir($productFolder)) {
//             mkdir($productFolder, 0755, true);
//         } 
//         if ($request->hasFile('img')) {
//             $file = $request->file('img');   
//             $filename = time() . '.' . $file->getClientOriginalExtension();   
//             $file->move($productFolder, $filename);   
//             $data['img'] = $filename;
//         } else {
//             $data['img'] = 'logo.png';
//         }

//         $data['category_id'] = $categoryId;

//         Product::create($data);
//         return response()->json(['data' => new ProductResource($data)], 200);
//     // } else {
//     //     return response()->json(['message' => 'not allow to update product.'], 403);
//     // }
// // } catch (Exception $e) {
// //     return response()->json($e, 500);
// // }
//     }
    

// public function store(StoreProductRequest $request)
// {
//     // try {
//         // Extract product data from the request
//         $data = $request->only([
//             'name',
//             'description',
//             'price',
//             'category_id',
//         ]);
//             $categoryId = $request->input('category_id');

//         // Create the product
//         $product = Product::create([
//             'name' => $data['name'],
//             'description' => $data['description'],
//             'price' => $data['price'],
//             'category_id' => $categoryId ,
//         ]);

//         // Extract images data from the request
//         $imagesData = $request->file('images');

//         foreach ($imagesData as $image) {
//             $path = $image->store('images');
//             $product->images()->create([
//                 'path' => $path,
//             ]);
//         }

//         // Load the images and related product details
//         // $product->load('images.product');

//         return response()->json(['data' => new ProductResource($product)], 201); // Use 201 Created status code
//     // } catch (Exception $e) {
//     //     return response()->json($e, 500);
//     // }
// }



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


        // $imagesData = $request->file('images');

        // // foreach ($imagesData as $image) {
        // //     $path = $image->store('images', 'public');

        // //     $product->images()->create([
        // //         'path' => $path,
        // //     ]);
        // // }

        // foreach ($imagesData as $image) {
        //     $filename = time() . '_' . $image->getClientOriginalName();
        //     $image->move(public_path('images'), $filename);
        
        //     $product->images()->create([
        //         'path' => 'images/' . $filename,
        //     ]);
        // }
        


        // $product->load('images.product');

        // dd($product->images);




        $imagesData = $request->file('images');

        foreach ($imagesData as $image) {
            $filename = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('images'), $filename);

            $product->images()->create([
                'path' => 'images/' . $filename,
            ]);
        }

        // Load the images for the product
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