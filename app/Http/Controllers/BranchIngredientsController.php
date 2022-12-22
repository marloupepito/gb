<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BranchIngredients;
use App\Models\User;

class BranchIngredientsController extends Controller
{
    public function get_branch_ingredients(Request $request){
        $branch =User::where('branch_name','=',$request->branchName)->first();
        $ingredients = BranchIngredients::where('branch_id','=',$branch->id)->get();
         return response()->json([
             'status' => $ingredients
         ]);
     }

     public function get_every_ingredients(Request $request){

        $ingredients = BranchIngredients::where('id',$request->id)->first();
        return response()->json([
            'status' => $ingredients
        ]);
    }
}
