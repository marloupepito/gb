import React, { useState, useEffect } from "react";
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    TabIndicator,
} from "@chakra-ui/react";
import Card from "../../../../../components/card";
import { useNavigate,useParams,Outlet } from "react-router-dom";
function AccountProfileTabs() {
    const navigate = useNavigate();
    const loc = window.location.pathname.split('/')[5]
    const userid = window.location.pathname.split('/')[6]
    const {branchid} = useParams();
  
    const [index,setIndex] = useState(loc === 'profile'?'0':loc === 'attendance'?'1':loc === 'charges'?'2':loc === 'salary'?'3':loc === 'credits'?'4':'5');

    const active ='inline-block p-3 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500'
    const notactive ='inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
    function nextPage (where,active){
        setIndex(active)
          navigate("/administrator/branch/"+branchid+'/accounts/'+where+'/'+userid);
    }
    return (
        <div
        >
        <div className="mb-4 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                    <a onClick={() =>nextPage('profile','0')} class={index === '0'?active:notactive}>Information</a>
                </li>
                <li className="mr-2">
                    <a  onClick={() =>nextPage('attendance','1')} class={index === '1'?active:notactive} >Attendance</a>
                </li>
                <li className="mr-2">
                    <a  onClick={() =>nextPage('charges','2')} class={index === '2'?active:notactive}>Charges</a>
                </li>
                <li className="mr-2">
                    <a  onClick={() =>nextPage('salary','3')} class={index === '3'?active:notactive}>Salary</a>
                </li>
                <li className="mr-2">
                    <a  onClick={() =>nextPage('credits','4')} class={index === '4'?active:notactive}>Credits</a>
                </li>
                <li className="mr-2">
                    <a  onClick={() =>nextPage('qrcode','5')} class={index === '5'?active:notactive}>Qrcode</a>
                </li>
                {/* <li>
                    <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
                </li> */}
            </ul>
        </div>
<Outlet />
         
        </div>
    );
}

export default AccountProfileTabs;
