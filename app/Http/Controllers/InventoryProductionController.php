<?php

namespace App\Http\Controllers;
use App\Models\InventoryProduction;
use App\Models\Production;
use Illuminate\Http\Request;
use App\Models\BranchIngredients;
class InventoryProductionController extends Controller
{
  public function add_bread_list(Request $request){
        
          for ($i=0; $i < count($request->data); $i++) { 
              $branchIngredientId = $request->data[$i]['branch_ingredients_id'];
        
              $remaining = BranchIngredients::where('id',$branchIngredientId)->first();
              $equal = $remaining->ingredients_quantity - $request->data[$i]['quantity'];

              BranchIngredients::where('id',$branchIngredientId)
              ->update(['ingredients_quantity' => $equal]);
         
          }
          return response()->json([
            'status' =>$request->data
        ]);
          
        
        
       

     }
       public function get_bread(Request $request){

             $request->validate([
                'id'=>['required'],
             ]);

              $request = InventoryProduction::where('branch_id','=' ,$request->id)
              ->select('production_id','production_status','created_at')->distinct()->orderBy('created_at','DESC')->get();

               return response()->json([
                'status' => $request
            ]);

     }
      public function get_specific_production(Request $request){

             $request->validate([
                'production_id'=>['required'],
             ]);

              $request = InventoryProduction::where('production_id' ,$request->production_id)->get();

               return response()->json([
                'status' => $request
            ]);

     }
      public function update_bread_out(Request $request){

             $request->validate([
                'data'=>['required'],
             ]);

            for ($i=0; $i < count($request->data); $i++) { 
                InventoryProduction::where('id',  $request->data[$i]['id'])
                ->update([
                  'bread_out' => $request->data[$i]['bread_out'],
                  'charge_pc' => $request->data[$i]['charge_pc'],
                  'remaining_pcs' => $request->data[$i]['remaining_pcs'],
                  'sold_bread' => $request->data[$i]['sold_bread'],
                  'sales' => $request->data[$i]['sales'],
                  'production_status' => 'Bread Out',
                ]);
            }

              $inventory = InventoryProduction::where([
                ['branch_id','=' ,$request->data[0]['branch_id']],
                ['production_id','=',$request->data[0]['production_id']]
              ])->get();

               return response()->json([
                'status' =>  $inventory
               ]);

     }

     
}
