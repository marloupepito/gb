<?php

use Illuminate\Support\Facades\Route;
use App\http\Controllers\EvaluatorController;
use App\http\Controllers\UsersController;
use App\http\Controllers\BranchIngredientsController;
use App\http\Controllers\IngredientsController;
use App\http\Controllers\IngredientsRequestController;
use App\http\Controllers\ProductionController;
use App\http\Controllers\InventoryProductionController;
use App\http\Controllers\BranchController;
use App\http\Controllers\NotificationController;
use App\http\Controllers\BranchBreadController;
use App\http\Controllers\RecordsController;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{jsx?}',function(){
    return view('welcome');
})->where('jsx','[\/\w\.-]*');



Route::post('/logout','UsersController@logout');
Route::post('/get_all_branch','BranchController@get_all_branch');
Route::post('/get_branch_id','BranchController@get_branch_id');
Route::post('/add_branch','BranchController@add_branch');
Route::post('/delete_branch','BranchController@delete_branch');

Route::post('/user_login','UsersController@user_login');


Route::post('/get_all_ingredients','IngredientsController@get_all_ingredients');

Route::post('/send_request_form','IngredientsRequestController@send_request_form');
Route::post('/get_request_from_branch','IngredientsRequestController@get_request_from_branch');
Route::post('/get_only_current_branch_request','IngredientsRequestController@get_only_current_branch_request');
Route::post('/accept_request_ingredients','IngredientsRequestController@accept_request_ingredients');
Route::post('/get_ingredients_list','IngredientsRequestController@get_ingredients_list');
Route::post('/delete_ingredients_request','IngredientsRequestController@delete_ingredients_request');

Route::post('/get_all_production','ProductionController@get_all_production');
Route::post('/add_branch_ingredients','ProductionController@add_branch_ingredients');
Route::post('/get_production_code','ProductionController@get_production_code');

Route::post('/add_bread_list','InventoryProductionController@add_bread_list');
Route::post('/get_branch_bread_sold','InventoryProductionController@get_branch_bread_sold');
Route::post('/get_branch_bread_out','InventoryProductionController@get_branch_bread_out');


Route::post('/get_notification','NotificationController@get_notification');


Route::post('/get_branch_ingredients','BranchIngredientsController@get_branch_ingredients');
Route::post('/get_every_ingredients','BranchIngredientsController@get_every_ingredients');
Route::post('/make_branch_ingredients','BranchIngredientsController@make_branch_ingredients');

Route::post('/get_bread_every_branch','BranchBreadController@get_bread_every_branch');
Route::post('/get_bread_every_branch2','BranchBreadController@get_bread_every_branch2');
Route::post('/get_bread_every_branch2','BranchBreadController@get_bread_every_branch2');


Route::post('/add_bread_branch_sold','BranchBreadController@add_bread_branch_sold');
Route::post('/add_bread_branch_out','BranchBreadController@add_bread_branch_out');



Route::post('/get_branch_record','RecordsController@get_branch_record');



