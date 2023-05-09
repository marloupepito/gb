import React, { useState, useEffect } from "react";
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    TabIndicator,
} from "@chakra-ui/react";
import Card from "./../../../components/card";
import { Outlet } from "react-router-dom";
import { useNavigate,useParams } from "react-router-dom";
function BreadProductionTabs() {
    const navigate = useNavigate();
    const loc = window.location.pathname.split('/')[5]
    const {branchid} = useParams();
    const [index,setIndex] = useState(loc === undefined?0:loc === 'bakers_report'?1:loc === 'bread_report'?2:3);
    const active ='inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500'
    const notactive ='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
    function nextPage (where,active){

        setIndex(active)
     navigate("/administrator/branch/"+branchid+'/production'+where);
    }
    return (
        <Card
        extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto mt-3"}
        >
<div className="mb-4 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
            <a onClick={() =>nextPage(' ',0)} href="#" className={index === 0?active:notactive}>Create Beginning</a>
        </li>
        <li className="mr-2">
            <a href="#"  onClick={() =>nextPage('/bakers_report',1)} className={index === 1?active:notactive} >Baker Report</a>
        </li>
        <li className="mr-2">
            <a href="#"  onClick={() =>nextPage('/bread_report',2)} className={index === 2?active:notactive}>Bread Report</a>
        </li>
        <li className="mr-2">
            <a href="#"  onClick={() =>nextPage('/sales_report',3)} className={index === 3?active:notactive}>Sales Report</a>
        </li>
        {/* <li>
            <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
        </li> */}
    </ul>
</div>
<Outlet />
         
        </Card>
    );
}

export default BreadProductionTabs;
