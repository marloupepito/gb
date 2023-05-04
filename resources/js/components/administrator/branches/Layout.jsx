import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
function BranchesLayout() {
    return ( 
        <>
          <Outlet/>
        </>
     );
}

export default BranchesLayout;