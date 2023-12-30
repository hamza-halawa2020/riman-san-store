<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\OrderDetailsController;

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
Route::apiResource('contacts', ContactController::class);
Route::apiResource('orders', OrderController::class);
Route::apiResource('orderdetails', OrderDetailsController::class);
// Route::get('/order/details/{id}', [OrderDetailsController::class, 'indexByOrderId']);
// Route::get('/order/{id}', [OrderController::class, 'getOrderById']);

Route::apiResource('reviews', ReviewController::class);
Route::post('login', [AuthController::class, 'login']);
