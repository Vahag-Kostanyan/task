<?php

use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => "/crud", "middleware" => "cors"], function() {
    Route::post("/create_student", [StudentController::class, "create_student"]);
    Route::post("/edit_student", [StudentController::class, "edit_student"]);
    Route::get("/get_students", [StudentController::class, "get_students"]);
    Route::get("/get_student/{id}", [StudentController::class, "get_student"]);
    Route::get("/delete_student/{id}", [StudentController::class, "delete_student"]);
});