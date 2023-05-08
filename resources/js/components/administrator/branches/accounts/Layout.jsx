import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import AccountsTable from "./components/Table";
import AccountCard from "./sections/profile/components/Card";
import { Routes, Route, useParams } from 'react-router-dom';
import AccountAttendanceTable from "./sections/attendance/components/Table2";
function AccountsLayout() {
  const [userid,setUserid] = useState(false)
  let { accountid } = useParams();
  useEffect(() => {
    setUserid(window.location.pathname.split('/')[6])
  }, [accountid]);
    return (
        <Box className="mt-3">
           <div className="row">
                <div className="col-md-5 col-12">
                   <div className="col-md-12 col-12">
                    <AccountsTable />
                  </div>
                   <div className="col-md-12 col-12">
                    <AccountAttendanceTable />
                  </div>
                </div>
                <div className="col-md-7 col-12">
                  
                  {
                    userid !=undefined?<AccountCard />:''
                  }
                </div>
                
           </div>
        </Box>
    );
}

export default AccountsLayout;
