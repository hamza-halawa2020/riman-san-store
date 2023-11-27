<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreReviewRequest;
use App\Http\Resources\ReviewResource;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index()
    {
        $reviews = Review::all();
        return ReviewResource::collection($reviews);
    }

    public function store(StoreReviewRequest $request)
    {
        try {
            $review = Review::create($request->all());
            return response()->json(['data' => new ReviewResource($review)], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while creating the review'], 500);
        }
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
