<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\IngredientsRequest;
use App\Models\User;
class IngredientsRequestController extends Controller
{
    public function send_request_form(Request $request){

        $request->validate([
            'data'=>['required'],
            'id'=>['required'],
            'branch'=>['required'],
        ]);

        $request_id =rand(1000000000,9999999999);
       

        for ($i=0; $i < count($request->data); $i++) { 
             $ingredients = new IngredientsRequest;
             $ingredients->branch_id = $request->id;
             $ingredients->request_id = $request_id;
             $ingredients->branch_name = $request->branch;
             $ingredients->ingredients_name = $request->data[$i][0];
             $ingredients->ingredients_quantity = $request->data[$i][1];
             $ingredients->ingredients_package = $request->data[$i][2];
             $ingredients->ingredients_status = $request->data[$i][3];
             $ingredients->save();
        }
         return response()->json([
                'status' => 'success'
            ]);
    }
     public function get_request_from_branch(Request $request){

             $request->validate([
                'id'=>['required'],
             ]);

             $branch = User::where('branch_name' ,ucwords($request->id))->first();

             if($branch === null){
                     $requestsss = IngredientsRequest::where('branch_id','=' ,$request->id)
                      ->select('request_id','ingredients_status','created_at')->distinct()->orderBy('created_at','DESC')->get();

                       return response()->json([
                        'status' => $requestsss,
                    ]);
             }else{
                     $requestsss = IngredientsRequest::where('branch_id','=',  $branch['id'])
                      ->select('request_id','ingredients_status','created_at')->distinct()->orderBy('created_at','DESC')->get();

                       return response()->json([
                        'status' => $requestsss,
                         'status2' => $branch
                    ]);
             }
             

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

               IngredientsRequest::where([['branch_id','=',$request->branchid],['request_id','=',$request->requestid]])
              ->update(['ingredients_status' => $request->response]);

            $ingredients = IngredientsRequest::where([['branch_id','=',$request->branchid],['request_id','=',$request->requestid]])->get();
            
               return response()->json([
                'status' => $ingredients
            ]);
     }
}
