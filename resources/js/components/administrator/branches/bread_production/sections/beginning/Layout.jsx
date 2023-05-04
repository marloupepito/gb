import React, { useState, useEffect } from "react";
import BeginningTable from "./components/Table";
function BeginningLayout() {
    return (
        <>
            <div className="row">
               <BeginningTable />
            </div>
        </>
    );
}

export default BeginningLayout;
