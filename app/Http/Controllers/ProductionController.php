<?php

namespace App\Http\Controllers;
use App\Models\Production;
use Illuminate\Http\Request;

class ProductionController extends Controller
{
       public function get_all_production(Request $request){
            $data = Production::where('branch_id','=',$request->id)->get()->unique('random_id');
             return response()->json([
                'status' =>  $data,
            ]);
       }

       public function get_production_code(Request $request){
          $data = Production::where('random_id','=',$request->randomid)->get();
           return response()->json([
              'status' =>  $data,
          ]);
     }
       
    public function add_branch_ingredients(Request $request){
     $codename = $request->data['codename'];
     $branchid =$request->branchid;
     $price =$request->data['price'];
     $random =rand(1000000,9999999);
     for ($i=0; $i < count($request->data['users']); $i++) { 
          Production::create(
               [
                    'branch_id' => $branchid,
                    'code_name' => $codename,
                    'random_id' => $random,
                    'ingredients_name' =>$request->data['users'][$i]['ingredients'],
                    'quantity'=>$request->data['users'][$i]['quantity'],
                    'price' =>$price,
               ]
          );
     }
    
     return response()->json([
         'status' => $request->data['users'][0]['ingredients']
     ]);
 }
}
