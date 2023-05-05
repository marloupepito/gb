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
    function nextPage (where){
     navigate("/administrator/branch/"+branchid+'/production'+where);
    }
    return (
        <Card
        extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto mt-3"}
        >
            <Tabs className="mt-3" defaultIndex={index} variant="enclosed">
                <TabList>
                    <Tab onClick={() =>nextPage(' ')}>Create Beginning</Tab>
                    <Tab onClick={() =>nextPage('/bakers_report')}>Baker Report</Tab>
                    <Tab onClick={() =>nextPage('/bread_report')}>Bread Report</Tab>
                    <Tab onClick={() =>nextPage('/sales_report')}>Sales Report</Tab>
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="red.600"
                    borderRadius="1px"
                />
                <TabPanels>
                    <TabPanel>
                        <Outlet />
                    </TabPanel>
                    <TabPanel>
                        <Outlet />
                    </TabPanel>
                    <TabPanel>
                        <Outlet />
                    </TabPanel>
                    <TabPanel>
                        <Outlet />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Card>
    );
}

export default BreadProductionTabs;
