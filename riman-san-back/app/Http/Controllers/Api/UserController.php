<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\StoreUserRequest;

class UserController extends Controller
{

    public function index()
    {
        $users = User::all();
        return UserResource::collection($users);
    }


    public function store(StoreUserRequest $request)
    {
        try {
            // Create a new user
            $user = User::create($request->all());
            // Return the user
            return response()->json(['data' => new UserResource($user)], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while creating the user'], 500);
        }
    }

    public function show(string $id)
    {
        $user = User::findOrFail($id);
        return new UserResource($user);
    }


    public function update(Request $request, string $id)
    {
        try {
            $user = User::findOrFail($id);
            $user->update($request->all());
            return response()->json(['data' => new UserResource($user)], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while updating the user'], 500);

        }
    }

    public function destroy(string $id)
    {
        try {
            $user = User::findOrFail($id);
            $user->delete();
            return response()->json(['data' => 'user deleted successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while deleting the user'], 500);
        }
    }
}
