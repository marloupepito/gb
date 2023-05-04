<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BranchIngredients;
use App\Models\User;
use App\Models\Branches;

class BranchIngredientsController extends Controller
{

    
    public function delete_branch_ingredients(Request $request){
        BranchIngredients::where('id','=',$request->id)->delete();
    }
    public function get_branch_ingredients(Request $request){
        $ingredients = BranchIngredients::where('branch_id','=',$request->id)->orderBy('ingredients_quantity', 'ASC')->get();
         return response()->json([
             'status' => $ingredients
         ]);
     }

     public function get_every_ingredients(Request $request){

        $ingredients = BranchIngredients::where('id', $request->id)->get();
        return response()->json([
            'status' => $ingredients
        ]);
    }

    public function make_branch_ingredients(Request $request){

        
        BranchIngredients::create($request->validate([
            'branch_id' => 'required',
            'ingredients_name' => 'required',
            'ingredients_quantity' => 'required',
            'bind_name' => 'required',
            'notify' => 'required',
        ]));
         
        return response()->json([
            'status' => $request->ingredients_name
        ]);
    }


    
}
