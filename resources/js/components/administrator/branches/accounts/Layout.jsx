import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import AccountsTable from "./components/Table";
import { Outlet } from "react-router-dom";
function AccountsLayout() {
    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
           <div className="row">
                <div className="col-md-5">
                   <AccountsTable />
                </div>
                <div className="col-md-7">
                  <Outlet />
                </div>
           </div>
        </Box>
    );
}

export default AccountsLayout;
