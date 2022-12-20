import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
export function SearchBranchId() {
    let [searchParams, setSearchParams] = useSearchParams();
    
    const id = searchParams.get('branch_id')
    useEffect(() => {
        setSearchParams('branch_id='+id)
    }, []);
 
    return ( 
        <>
       {id}
        </>
     );
}

