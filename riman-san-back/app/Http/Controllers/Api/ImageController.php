<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Resources\ImageResource;
use App\Http\Requests\StoreImageRequest;

use Exception;
class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $images = Image::all();
            return ImageResource::collection($images);
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }


    // public function store(StoreImageRequest $request)
    // {
    //     // try {
    //         $data = $request->all();
    //         $product_id = $request->input('product_id');
    
    //         // Check if the associated product exists
    //         // $product = Product::find($product_id);
    
    //         // if (!$product) {
    //         //     return response()->json(['message' => 'Product not found.'], 404);
    //         // }
    
    //         $path = 'img/products/';
    //         $productFolder = public_path($path);
    
    //         if (!is_dir($productFolder)) {
    //             mkdir($productFolder, 0755, true);
    //         }
    
    //         if ($request->hasFile('path')) {
    //             $file = $request->file('path');
    //             $filename = time() . '.' . $file->getClientOriginalExtension();
    
    //             $file->move($productFolder, $filename);
    
    //             $data['path'] = $filename;
    //         } else {
    //             $data['path'] = 'logo.png';
    //         }
    
    //         $data['product_id'] = $product_id;
    //         // $image = Image::create($data);
    //         Image::create($data);

    
    //         return response()->json(['data' => new ImageResource($data)], 200);
    //     // } catch (Exception $e) {
    //     //     return response()->json(['error' => 'Internal Server Error'], 500);
    //     // }
    // }
    



//     public function store(StoreImageRequest $request)
// {
//     // try {
//         $data = $request->all();
//         $product_id = $request->input('product_id');

//         // Check if the associated product exists (if needed)
//         // $product = Product::find($product_id);

//         // if (!$product) {
//         //     return response()->json(['message' => 'Product not found.'], 404);
//         // }

//         $path = 'img/products/';
//         $productFolder = public_path($path);

//         if (!is_dir($productFolder)) {
//             mkdir($productFolder, 0755, true);
//         }

//         if ($request->hasFile('path')) {
//             $file = $request->file('path');
//             $filename = time() . '.' . $file->getClientOriginalExtension();

//             $file->move($productFolder, $filename);

//             $data['path'] = $filename;
//         } else {
//             $data['path'] = 'logo.png';
//         }

//         $data['product_id'] = $product_id;

//         // Create the Image instance
//         $image = Image::create($data);

//         // Use the ImageResource to format the response
//         return response()->json(['data' => new ImageResource($image)], 200);
//     // } catch (Exception $e) {
//     //     return response()->json(['error' => 'Internal Server Error'], 500);
//     // }
// }












    /**
     * Store a newly created resource in storage.
     */
    // public function store(StoreImageRequest $request)
    // {
    //     try {
    //         // if (Gate::allows("is-admin")) {
    //             $data = $request->all();
    //             $product_id = $request->input('product_id');
    //             $path = 'img/products/';
    //             $productFolder = public_path($path);                
    //             if (!is_dir($productFolder)) {
    //                 mkdir($productFolder, 0755, true);
    //             }     
    //             if ($request->hasFile('path')) {
    //                 $file = $request->file('path');
    //                 $filename = time() . '.' . $file->getClientOriginalExtension();
    //                 $file->move($productFolder, $filename);
    //                 $data['path'] = $filename;
    //             } else {
    //                 $data['path'] = 'logo.png';
    //             }    
    //             $data['product_id'] = $product_id;
    //             $image = Image::create($data);
    //             return response()->json(['data' => new ImageResource($image)], 200);
    //         // } else {
    //         //     return response()->json(['message' => 'Not allowed to update product.'], 403);
    //         // }
    //     } catch (Exception $e) {
    //         return response()->json($e, 500);
    //     }
    // }
    
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $image = Image::findOrFail($id);
            return new ImageResource($image);
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Image $image)
    {
        //
    }
}
