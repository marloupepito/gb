import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
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

export async function getEveryAccountCreditsAPI(id) {
    const result =  axios.get('/api/get_user_credits/'+id);
    return result;
}
export async function createCreditsAPI(data) {
    try {
       const result = await axios.post('/create_credit_or_charge',data)
        if(result){
            success()
        }
          return result;
    } catch (error) {
        
    }
}

