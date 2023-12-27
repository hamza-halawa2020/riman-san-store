<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreReviewRequest;
use App\Http\Resources\ReviewResource;
use App\Models\Review;
use Illuminate\Http\Request;
use Gate;

class ReviewController extends Controller
{
    function __construct()
    {
        $this->middleware("auth:sanctum")->except('store');
    }
    public function index()
    {
        try {
            if (Gate::allows("is-admin")) {
                $reviews = Review::all();
                return ReviewResource::collection($reviews);
            } else {
                return response()->json(['message' => 'not allow to show reviews.'], 403);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while showing reviews.'], 500);
        }
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
        try {
            if (Gate::allows("is-admin")) {
                $review = Review::findOrFail($id);
                return new ReviewResource($review);
            } else {
                return response()->json(['message' => 'not allow to show review.'], 403);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while showing review.'], 500);
        }
    }


    public function update(Request $request, string $id)
    {
        try {
            if (Gate::allows("is-admin")) {
                $review = Review::findOrFail($id);
                $review->update($request->all());
                return response()->json(['data' => new ReviewResource($review)], 200);
            } else {
                return response()->json(['message' => 'not allow to edit review.'], 403);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while updating the Review'], 500);
        }
    }

    public function destroy(string $id)
    {
        try {
            if (Gate::allows("is-admin")) {
                $review = Review::findOrFail($id);
                $review->delete();
                return response()->json(['data' => 'Review deleted successfully'], 200);
            } else {
                return response()->json(['message' => 'not allow to delete review.'], 403);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while deleting the Review'], 500);
        }
    }
}
