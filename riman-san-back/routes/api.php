<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ContactConroller;
use App\Http\Controllers\Api\OrderConroller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResource('products', ProductController::class);
Route::apiResource('categories', CategoryController::class);
Route::get('/product/category/{id}', [ProductController::class, 'indexByCategory']);
Route::apiResource('users', UserController::class);
Route::apiResource('contacts', ContactConroller::class);
Route::apiResource('orders', OrderConroller::class);
Route::apiResource('reviews', ReviewController::class);
Route::post('login', [AuthController::class, 'login']);
