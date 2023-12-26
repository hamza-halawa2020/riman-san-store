<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Gate;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\StoreUserRequest;

class UserController extends Controller
{
    // function __construct()
    // {
    //     $this->middleware("auth:sanctum");
    // }

    public function index()
    {
        try {
            if (Gate::allows("is-admin")) {
                $users = User::all();
                return UserResource::collection($users);
            } else {
                return response()->json(['message' => 'not allow to show users.'], 403);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while showing users.'], 500);
        }
    }

    public function store(StoreUserRequest $request)
    {
        // $validator = validator::make($request->all(), [

        // ]);
        try {
            $user = User::create($request->all());
            return response()->json(['data' => new UserResource($user)], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while creating the user'], 500);
        }
    }

    public function show(string $id)
    {
        try {
            if (Gate::allows("is-admin")) {
                $user = User::findOrFail($id);
                return new UserResource($user);
            } else {
                return response()->json(['message' => 'not allow to show user.'], 403);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while showing user.'], 500);
        }
    }
    public function update(Request $request, string $id)
    {
        try {
            if (Gate::allows("is-admin")) {
                $user = User::findOrFail($id);
                $user->update($request->all());
                return response()->json(['data' => new UserResource($user)], 200);
            } else {
                return response()->json(['message' => 'not allow to update user.'], 403);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while updating the user'], 500);

        }
    }

    public function destroy(string $id)
    {
        try {
            if (Gate::allows("is-admin")) {
                $user = User::findOrFail($id);
                $user->delete();
                return response()->json(['data' => 'user deleted successfully'], 200);
            } else {
                return response()->json(['message' => 'not allow to delete user.'], 403);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while deleting the user'], 500);
        }
    }
}
