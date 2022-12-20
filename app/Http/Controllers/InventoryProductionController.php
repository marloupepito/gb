<?php

namespace App\Http\Controllers;
use App\Models\InventoryProduction;
use Illuminate\Http\Request;

class InventoryProductionController extends Controller
{
  public function bread_in(Request $request){
          $request->validate([
            'data'=>['required'],
            'id'=>['required'],
            'branch'=>['required'],

        ]);

        $production_id =rand(1000000000,9999999999);
       

        for ($i=0; $i < count($request->data); $i++) { 
             $ingredients = new InventoryProduction;
             $ingredients->branch_id = $request->id;
             $ingredients->production_id = $production_id;
             $ingredients->cashier_name = 'sample name';
             $ingredients->sales_clerk = 'sample clerk';
             $ingredients->trainee ='sample trainee';
             $ingredients->bread_name = $request->data[$i][0];
             $ingredients->beginning_pcs = $request->data[$i][1];
             $ingredients->new_production_pcs = $request->data[$i][2];
             $ingredients->price = $request->data[$i][3];
             $ingredients->branch_name = $request->branch;
             $ingredients->total =($request->data[$i][1] + $request->data[$i][2]) * $request->data[$i][3];
             $ingredients->bread_out = '';
             $ingredients->charge_pc = '';
             $ingredients->remaining_pcs = '';
             $ingredients->sold_bread = '';
             $ingredients->sales = '';
             $ingredients->production_status = 'Bread In';
             $ingredients->date = '';
             $ingredients->save();
        }
         return response()->json([
                'status' => 'success'
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
