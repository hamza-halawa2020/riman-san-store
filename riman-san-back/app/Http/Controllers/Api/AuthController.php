<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Exception;

class AuthController extends Controller
{

//this function when the user login the old token saved in database and the new 
    //     public function login(Request $request)
//     {
//         try{
//         $this->validate($request, [
//             "email" => "required|email",
//             "password" => "required",
//         ]);

//         $login = $request->only("email", "password");
//         if (!Auth::attempt($login)) {
//             return response(['message' => 'invalid login'], 401);
//         }
//         $user = Auth::user();
//         $token = $user->createToken($user->name);
//         return response([
            // 'id'=> $user->id,
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

public function login(Request $request)

{

    try{

    $this->validate($request, [
        'phone' => ['required', 'regex:/^(010|011|012|015)\d{8}$/'],
        "password" => "required",
    ]);

    $login = $request->only("phone", "password");
    if (!Auth::attempt($login)) {
        return response(['message' => 'invalid login'], 401);
    }
    $user = Auth::user();
    $user->tokens()->delete();
    $token = $user->createToken($user->phone);
    return response([
        'token' => $token->plainTextToken
    ], 200);

} catch (Exception $e) {
    return response()->json($e, 500);
}
}
}
