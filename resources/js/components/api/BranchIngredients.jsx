import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";


// let location = useLocation().hash;
// const { branchid } = useParams();
// const [data, setData] = useState([]);
export function BranchIngredientsAPI(branchid) {
    try {
       const data = axios.get("/api/get_branch_ingredients/" + branchid);
        return { data };
    } catch (error) {
        
    }
}

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
export function deleteItem(id) {
   try{
    axios
    .delete("/api/delete_branch_ingredients/" + id)
    success()
   }
   catch{
    error()
   }
}


export function updateBranchIngredientsAPI(props) {
    try{
        axios.put('/edit_branch_ingredients',{
            data:props
        })
        success()
    }
    catch{
        error()
    }
}

export function createBranchIngredientsAPI(props) {
    try{
        axios.post('/make_branch_ingredients',{
            branch_id:props.branch_id,
            ingredients_name:props.ingredients_name,
            ingredients_quantity:props.ingredients_quantity,
            bind_name:props.bind_name,
            notify:props.notify
        })
        .then(res=>{
            success()
        })
    }
    catch{
        error()
    }
}


