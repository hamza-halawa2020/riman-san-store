<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Exception;
use App\Http\Requests\LoginRequest;
use App\Models\User;

class AuthController extends Controller
{

    function __construct()
    {
        $this->middleware("limitReq");
    }

    //this function when the user login the old token saved in database and the new 
    //     public function login(Request $request)
    //     {
    //         try{
    //         $login = $request->validated();
    //         $login = $request->only("email", "password");
    //         if (!Auth::attempt($login)) {
    //             return response(['message' => 'invalid login'], 401);
    //         }
    //         $user = Auth::user();
    //         $token = $user->createToken($user->name);
    //         return response([
                //  'id'=> $user->id,
                // 'name' => $user->name,
                // 'email' => $user->email,
                // 'role' => $user->role,
    //             'token' => $token->plainTextToken

    //         ], 200);

    //     } catch (Exception $e) {
    //         return response()->json($e, 500);
    //     }
    // }
    // }

    //this function when the user login the old token delete from database and the new saved 

    public function login(LoginRequest $request)
    {
        try {
            $login = $request->validated();
            $login = $request->only("phone", "password");
            if (!Auth::attempt($login)) {
                if (!User::where('phone', $login['phone'])->exists()) {
                    return response(['message' => 'invalid phone'], 401);
                } else if (!User::where('password', $login['password'])->exists()) {
                    return response(['message' => 'invalid password'], 401);
                } else {
                    return response(['message' => 'invalid login'], 401);
                }
            }
            $user = Auth::user();
            $user->tokens()->delete();
            $token = $user->createToken($user->phone);
            return response([
                'id' => $user->id,
                'name' => $user->name,
                'phone' => $user->phone,
                'role' => $user->role,
                'token' => $token->plainTextToken
            ], 200);
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }
}
