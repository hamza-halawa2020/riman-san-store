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
    public function show(string $id)
    {
        $review = Review::findOrFail($id);
        return new ReviewResource($review);
    }


    public function update(Request $request, string $id)
    {
        try {
            $review = Review::findOrFail($id);
            $review->update($request->all());
            return response()->json(['data' => new ReviewResource($review)], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while updating the Review'], 500);

        }
    }

    public function destroy(string $id)
    {
        try {
            $review = Review::findOrFail($id);
            $review->delete();
            return response()->json(['data' => 'Review deleted successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while deleting the Review'], 500);
        }
    }
}
