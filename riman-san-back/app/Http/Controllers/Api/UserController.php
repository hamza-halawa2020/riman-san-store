<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{

    public function index()
    {
        $users = User::all();
        return UserResource::collection($users);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required',
            'role' => 'required'
        ]);
        if ($validator->fails()) {
            return response($validator->errors()->all(), 422);
        }
        $user = User::create($request->all());
        return (new UserResource($user))->response()->setStatusCode(200);

    }

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
