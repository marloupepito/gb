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

export function GetBreadSoldReportAPI(datas) {
  try {
   const data= axios.get('/api/get_branch_record/'+datas.branchid+'/'+datas.date)
    
     return data;
  } catch (error) {
    error()
    return error
  }
}
export function AddBreadSoldReportAPI(branchid) {
  try {
    axios.post('/add_bread_branch_sold',branchid)
    success()
     return 'success';
  } catch (error) {
    error()
    return error
  }
}

export function GetBreadReportAPI(branchid) {
  try {
    const data = axios.get('/api/get_bread_report/'+branchid)
     return data;
  } catch (error) {
    error()
    return error
  }
}

export function GetBakersReportAPI(branchid) {
  try {
    const data = axios.get('/api/get_bakers_report/'+branchid)
     return data;
  } catch (error) {
    error()
    return error
  }
}

export function GoToBreadReportAPI(datas) {

  try {
   const result =  axios.post('/goto_bread_report',datas)
     return result;
  } catch (error) {
    error()
    return error
  }

}
