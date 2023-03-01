  // $bread=BranchBread::where([['branch_id','=',$request->branchid],['key','=',$request->data[0]['branch_bread_id']]])->first();

        // $beginning =  Records::where([['date','=',$date],['branch_id','=',$request->branchid],['bread_id','=',$request->data[0]['branch_bread_id']]])->orderBy('created_at','DESC')->first();


        // $checkExist =  Records::where([['remember_token','=',null],['branch_id','=',$request->branchid],['bread_id','=',$request->data[0]['branch_bread_id']]])->orderBy('created_at','DESC')->first();


        // if ($beginning === null) {

        //   if($checkExist !== null){
        //       Records::where([['remember_token','=',null],['bread_id','=',$request->data[0]['branch_bread_id']],['branch_id','=',$request->branchid]])->update([
        //         'total' =>$checkExist->total+$request->data[0]['production_quantity'],
        //         'production' =>$checkExist->production+$request->data[0]['production_quantity'],
        //         'charge' =>$request->data[0]['production_quantity'] - $request->quantity < 0?0:$request->data[0]['production_quantity'] - $request->quantity,
        //         'remark1' =>$request->remarks,
        //         'baker' => $request->baker,
        //         'target' =>$request->data[0]['production_quantity'],
        //         'status' => 'bakers'
        //       ]);
        //       return response()->json([
        //           'status' =>$checkExist
        //       ]);
        //   }else{
            
        //       $records = new Records;
        //       $records->branch_id = $request->branchid;
        //       $records->bread_id = $request->data[0]['branch_bread_id'];
        //       $records->bread_name =$request->data[0]['bread_name'];
        //       $records->beginning = $beginning === null?0:$beginning->remaining;
        //       $records->production = $request->quantity;
        //       $records->baker = $request->baker;
        //       $records->target = $request->data[0]['production_quantity'];
        //       $records->remark1 = $request->remarks;
        //       $records->charge = $request->data[0]['production_quantity'] - $request->quantity < 0?0:$request->data[0]['production_quantity'] - $request->quantity;
        //       $records->price = $bread->price;
        //       $records->total = $beginning === null? $request->quantity:$beginning->remaining+ $request->quantity;
        //       $records->date = $request->date;
        //       $records->status = 'bakers';
        //       $records->save();
        //       return response()->json([
        //           'status' =>$beginning
        //       ]);
        //   }
            
        // }else{

        //      Records::where('key',$checkExist->key)->update([
        //         'total' =>$checkExist->beginning+$request->quantity,
        //         'production' =>$request->quantity,
        //         'remark1' =>$request->remarks,
        //         'baker' => $request->baker,
        //         'charge' =>$request->data[0]['production_quantity'] - $request->quantity < 0?0:$request->data[0]['production_quantity'] - $request->quantity,
        //         'target' =>$request->data[0]['production_quantity'],
        //         'status' => 'bakers'
        //       ]);
        //       return response()->json([
        //           'status' =>$checkExist
        //       ]);

        // }