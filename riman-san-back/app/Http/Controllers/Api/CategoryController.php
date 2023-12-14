<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        try {
            $categories = Category::withCount(['products' => function ($query) {
                $query->withFilters();
            }])->get();
            return CategoryResource::collection($categories);

        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while showing categories.'], 500);
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
        try {
            $category = Category::findOrFail($id);
            return new CategoryResource($category);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while showing category.'], 500);
        }
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
