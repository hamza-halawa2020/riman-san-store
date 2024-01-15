<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Gate;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Exception;
use Illuminate\Validation\Rule;
use Twilio\Rest\Client;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    function __construct()
    {
        $this->middleware("auth:sanctum")->except('store','sendVerificationCode');
    }

    public function index()
    {
        try {
            // if (Gate::allows("is-admin")) {
                $users = User::all();
                return UserResource::collection($users);
            // } else {
            //     return response()->json(['message' => 'not allow to show users.'], 403);
            // }
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }

    public function store(StoreUserRequest $request)
    {

        try {
            $this->validate($request, [
                'name' => 'required|string',
                'phone' => ['required', 'regex:/^(010|011|012|015)\d{8}$/','unique:users'],
                'password' => 'required'
            ]);

            $verificationCode = mt_rand(1000, 9999);
      
            $user = User::create([
                'name'=> $request->name,
                'phone'=> $request->phone,
                'password'=> bcrypt($request->password),
                'verification_code' => $verificationCode,
            ]);

            $this->sendVerificationCode($request->phone, $verificationCode);
            return response()->json(['data' => new UserResource($user)], 200);
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }


    private function sendVerificationCode($receiverNumber, $verificationCode)
    {
        try {
            $account_sid = config('services.twilio.sid');
            $auth_token = config('services.twilio.token');
            $twilio_number = config('services.twilio.from');
    
            $client = new Client($account_sid, $auth_token);
            $client->messages->create($receiverNumber, [
                'from' => $twilio_number,
                'body' => "Your verification code: $verificationCode",
            ]);
    
            Log::info('Verification code sent successfully.');
            return 'Verification code sent successfully.';
        } catch (Exception $e) {
            Log::error("Error sending verification code: " . $e->getMessage());
            return "Error sending verification code: " . $e->getMessage();
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
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }
    public function update(UpdateUserRequest $request, string $id)
    {
        try {
            $user = User::findOrFail($id);
            $data = $this->validate($request, [
                'name' => 'sometimes|string',
                'phone' => [
                    'sometimes',
                    'regex:/^(010|011|012|015)\d{8}$/',
                     Rule::unique('users')->ignore($user->id),
                ],
                'role' => 'sometimes|in:admin,user',

            ]);
            if (Gate::allows("is-admin")) {
                $user->update([
                    'name' => $data['name'] ?? $user->name,
                    'phone' => $data['phone'] ?? $user->phone,
                    'role' => $data['role'] ?? $user->role,
                    // 'password' => isset($data['password']) ? bcrypt($data['password']) : $user->password,
                ]);
                return response()->json(['data' => new UserResource($user)], 200);
            } else {
                return response()->json(['message' => 'not allow to update user.'], 403);
            }
        } catch (Exception $e) {
            return response()->json($e, 500);
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
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }
}
