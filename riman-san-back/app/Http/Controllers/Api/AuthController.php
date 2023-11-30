<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request){
        $this->validate($request,[
            "email"=> "required",
            "password"=> "required",
        ]);
        $login = $request->only("email","password");
        if(!Auth::attempt($login)){
            return response(['message' =>'invalid login'],401);
        }
        $user = Auth::user();
        $token = $user->createToken($user->name);
        return response([
            // 'id'=> $user->id,
            // 'name'=> $user->name,
            // 'email'=> $user->email,
            'role'=> $user->role,
            // 'token'=> $token->plainTextToken

    ],200);

    }
}
