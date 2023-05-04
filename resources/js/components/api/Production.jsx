import React, { useState, useEffect } from 'react';
import Swal from "sweetalert2";

function error(){
    Swal.fire({
        icon: 'error',
        title: 'Connection error!',
        showConfirmButton: false,
        timer: 1500
      })
}

function success(){
    Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
}
export function UpdateProductionCodeAPI(props) {

  try {
    axios.patch('/update_production_code',{
      branchid:props.branchid,
      data:props.data,
      target:props.target,
    })
      success()
     return 'success';
  } catch (error) {
    error()
    return error
  }

}


export function AddProductionAPI(props) {

      try {
        axios.post('/add_branch_ingredients',{
            target:props.target,
            breadid:props.breadid,
            branchid:props.branchid,
            items:props.data,
          })
          success()
         return props;
      } catch (error) {
        error()
        return error
      }
}

export function GetAllProductionAPI(branchid){
  try {
    const data=axios.get('/api/get_all_production/'+branchid)
    return data;
    
  } catch (error) {
    
  }
}

export function GetProductionCodeAPI(branchid){
  try {
    const data=axios.get('/api/get_production_code/'+branchid)
    return data;
    
  } catch (error) {
    
  }
}

export function GetProductionCode2API(random){
  try {
    const data=axios.get('/api/get_production_code2/'+random)
    return data;
  } catch (error) {
    
  }
}

export function AddBreadListAPI(datas){
  try {
    const data=axios.post('/add_bread_list',datas)
    success()
    return data;
    
  } catch (error) {
    error()
  }
}
