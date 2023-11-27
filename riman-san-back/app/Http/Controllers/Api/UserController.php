<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
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





    // public function store(Request $request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'name' => 'required',
    //         'email' => 'required|unique:users',
    //         'password' => 'required',
    //     ]);
    //     if ($validator->fails()) {
    //         return response($validator->errors()->all(), 422);
    //     }
    //     $user = User::create($request->all());
    //     return (new UserResource($user))->response()->setStatusCode(200);

    // }

    public function show(string $id)
    {
        $user = User::findOrFail($id);
        return new UserResource($user);
    }


    public function update(Request $request, string $id)
    {

    }

    public function destroy(string $id)
    {

    }
}
