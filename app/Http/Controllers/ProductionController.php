<?php

namespace App\Http\Controllers;
use App\Models\Production;
use Illuminate\Http\Request;
use App\Models\BranchIngredients;
use App\Models\BranchBread;
use Illuminate\Support\Facades\DB;
class ProductionController extends Controller
{

     public function update_production_code(Request $request){
          $codename = $request->code;
          $branchid =$request->branchid;
          $breadname =$request->data[0]['bread_name'];
          $productionquantity =$request->target;
         
     
          $breadId= $request->data[0]['branch_bread_id'];
     
          for ($i=0; $i < count($request->data); $i++) { 
               if(isset($request->data[$i]['id'])){
                    
               $ingredientid =$request->data[$i]['branch_ingredients_id'];
                $branching = BranchIngredients::where('id',$ingredientid)->first();
                     Production::where('id',$request->data[$i]['id'])->update([
                         'branch_ingredients_id' =>$branching->id,
                         'branch_bread_id' => $breadId,
                         'bind' =>$request->data[$i]['bind'],
                         'bread_name' =>strtoupper($breadname),
                         'ingredients_name' =>$branching->ingredients_name,
                         'production_quantity'=>$productionquantity,
                         'quantity'=>$request->data[$i]['quantity'],
                    ]);
               }else{
                    $branching = BranchIngredients::where('id',$request->data[$i]['ingredients'])->first();
                    Production::create(
                         [
                              'branch_id' => $branchid,
                              'branch_ingredients_id' => $branching->id,
                              'branch_bread_id' => $breadId,
                              'random_id' =>$request->data[0]['random_id'],
                              'bind' =>$request->data[$i]['bind'],
                              'bread_name' =>strtoupper($breadname),
                              'ingredients_name' =>$branching->ingredients_name,
                              'quantity'=>$request->data[$i]['quantity'],
                              'production_quantity'=>$productionquantity
                         ]
                    );
               }
              
          }

          return response()->json([
               'status' =>'success',
           ]);
     }

     public function get_production_code2($id){
          $data = Production::where('random_id','=',$id)->get();
           return response()->json([
              'status' => $data,
          ]);
     }
     
    public function edit_branch_ingredients(Request $request){
        BranchIngredients::where('id','=',$request->data['id'])
        ->update([
            'ingredients_name' =>$request->data['ingredients_name'],
            'ingredients_quantity' =>$request->data['ingredients_quantity'],
            'notify'  =>$request->data['notify'],
            'bind_name'  =>$request->data['bind_name'],
        ]);
    }
       public function get_all_production($id){
            $data = Production::where('branch_id','=',$id)->get()->unique('random_id');
             return response()->json([
                'status' =>  $data,
            ]);
       }

       public function get_production_code($id){
          $data = Production::where('random_id','=',$id)->get();
          $result = DB::table('production')
            ->join('branch_ingredients', 'production.branch_ingredients_id', '=', 'branch_ingredients.id')
            ->where('random_id','=',$data[0]->random_id)
            ->get();
           return response()->json([
              'status' => $result,
          ]);
     }
     
       
    public function add_branch_ingredients(Request $request){

     
     $random =rand(1000000,9999999);
     $bread = BranchBread::where('key','=',$request->breadid)->first();

   
    for ($i=0; $i < count($request->items); $i++) { 
          
           $branching = BranchIngredients::where('id','=',$request->items[$i]['ingredients'])->first();


          Production::create(
               [
                    'branch_id' => $request->branchid,
                    'branch_ingredients_id' => $request->items[$i]['ingredients'],
                    'branch_bread_id' =>$request->breadid,
                    'random_id' => $random,
                    'bind' =>$request->items[$i]['bind'],
                    'bread_name' =>strtoupper($bread->bread_name),
                    'ingredients_name' =>$branching->ingredients_name,
                    'quantity'=>$request->items[$i]['quantity'],
                    'production_quantity'=>$request->target
               ]
          );
    }
    
     return response()->json([
         'status' => 'success'
     ]);
 }
}
