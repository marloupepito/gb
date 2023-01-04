<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\IngredientsRequest;
use App\Models\BranchIngredients;
use App\Models\User;
class IngredientsRequestController extends Controller
{
    public function send_request_form(Request $request){
        
        $request_id =rand(1000000000,9999999999);
       

        for ($i=0; $i < count($request->data); $i++) { 
            $ing = BranchIngredients::where('ingredients_name','=',$request->data[$i])->first();
            
             $ingredients = new IngredientsRequest;
             $ingredients->branch_id = $request->branchid;
             $ingredients->request_id = $request_id;
             $ingredients->ingredients_id = $ing->id;
             $ingredients->ingredients_bind = $ing->bind_name;
             $ingredients->ingredients_name = $request->data[$i];
             $ingredients->ingredients_status = 'Pending';
             $ingredients->save();
        }
         return response()->json([
                'status' =>'success'
            ]);
    }
     public function get_request_from_branch(Request $request){

             $limit = ($request->current * $request->pageSize) +1;

             $delivery = IngredientsRequest::where([['branch_id','=' ,$request->branchid],['ingredients_status','=' ,$request->status]])->get()->unique('request_id');
                       return response()->json([
                        'status' => $delivery,
                    ]);
             

     }
      public function get_only_current_branch_request(Request $request){

             $request->validate([
                'id'=>['required'],
                'search'=>['required'],
             ]);

              $request = IngredientsRequest::where([['branch_id','=',$request->id],['request_id','=',$request->search]])->get();

               return response()->json([
                'status' => $request
            ]);
     }
       public function accept_request_ingredients(Request $request){

             $request->validate([
                'response'=>['required'],
                'branchid'=>['required'],
                'requestid'=>['required'],
             ]);

             if($request->response === 'Pending'){
                for ($i=0; $i < count($request->quantity); $i++) { 
                        IngredientsRequest::where([['key','=',$request->key[$i]],['branch_id','=',$request->branchid],['request_id','=',$request->requestid]])
                ->update([
                    'ingredients_status' => $request->response,
                    'ingredients_quantity' => $request->quantity[$i],
                    ]);
                }
             }else if($request->response === 'Received'){
                    IngredientsRequest::where([['branch_id','=',$request->branchid],['request_id','=',$request->requestid]])
                    ->update([
                      'ingredients_status' => $request->response,
                    ]);
             }
            


            // $ingredients = IngredientsRequest::where([['branch_id','=',$request->branchid],['request_id','=',$request->requestid]])->get();
            
               return response()->json([
                'status' => $request->key
            ]);
     }

     public function get_ingredients_list(Request $request){
        $ingredients = IngredientsRequest::where([['branch_id','=',$request->branchid],['request_id','=',$request->requestid]])->get();
        return response()->json([
            'status' => $ingredients
        ]);
     }
}
