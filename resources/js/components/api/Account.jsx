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

export function DeleteAccountAPI(id) {
  try {
   const data = axios
   .delete("/api/delete_account/"+id)
    data.then(res=>{
      success()
    })
     return data;
  } catch (error) {
    error()
    return error
  }
}
export function AddAccountAPI(items) {
  try {
   const res = axios.post('/add_account',items)
    res.then(res=>{
      success()
    })
     return res;
  } catch (error) {
    error()
    return error
  }
}


export function GetEveryAccount(accountid) {
  try {
   const data= axios.get('/api/get_every_account/'+accountid)
     return data;
  } catch (error) {
    error()
    return error
  }
}

export function GetAllUsers(branchid) {
  try {
   const data= axios.get('/api/get_all_users/'+branchid)
     return data;
  } catch (error) {
    error()
    return error
  }
}


