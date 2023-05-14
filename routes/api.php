<?php

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return '$request->user()';
// });

Route::get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});

Route::get('/get_all_users/{id}','App\Http\Controllers\UsersController@get_all_users');
Route::get('/get_every_account/{id}','App\Http\Controllers\UsersController@get_every_account');
Route::delete('/delete_account/{id}','App\Http\Controllers\UsersController@delete_account');

Route::get('/get_all_branch','App\Http\Controllers\BranchController@get_all_branch');
Route::get('/get_branch/{id}','App\Http\Controllers\BranchController@get_branch');


Route::get('/get_all_production/{id}','App\Http\Controllers\ProductionController@get_all_production');
Route::get('/get_production_code/{id}','App\Http\Controllers\ProductionController@get_production_code');
Route::get('/get_production_code2/{id}','App\Http\Controllers\ProductionController@get_production_code2');

Route::get('/my_account_production/{id}','App\Http\Controllers\RecordsController@my_account_production');
Route::post('/get_branch_charges/{date}/{branchid}','App\Http\Controllers\RecordsController@get_branch_charges');
Route::get('/get_branch_record/{branchid}/{date}','App\Http\Controllers\RecordsController@get_branch_record');


Route::get('/get_branch_ingredients/{id}','App\Http\Controllers\BranchIngredientsController@get_branch_ingredients');
Route::delete('/delete_branch_ingredients/{id}','App\Http\Controllers\BranchIngredientsController@delete_branch_ingredients');


Route::get('/get_branch_expenses/{id}/{dates}','App\Http\Controllers\ExpensesController@get_branch_expenses');
Route::get('/get_branch_dashboard/{id}/{periodical}','App\Http\Controllers\ExpensesController@get_branch_dashboard');


Route::get('/get_branch_images/{id}/{dates}/{imageid}','App\Http\Controllers\ImagesController@get_branch_images');


Route::get('/get_user_charges/{id}','App\Http\Controllers\ChargesController@get_user_charges');


Route::get('/get_user_credits/{id}','App\Http\Controllers\CreditsController@get_user_credits');
Route::get('/get_record_dates/{id}','App\Http\Controllers\CreditsController@get_record_dates');

Route::delete('/delete_bread/{id}','App\Http\Controllers\BranchBreadController@delete_bread');
Route::get('/get_all_bread','App\Http\Controllers\BranchBreadController@get_all_bread');
Route::get('/get_bread_every_branch2/{id}','App\Http\Controllers\BranchBreadController@get_bread_every_branch2');
Route::get('/get_bakers_report/{id}','App\Http\Controllers\BranchBreadController@get_bakers_report');
Route::get('/get_bread_report/{id}','App\Http\Controllers\BranchBreadController@get_bread_report');


Route::get('/get_branch_attendance/{id}','App\Http\Controllers\AttendanceController@get_branch_attendance');


