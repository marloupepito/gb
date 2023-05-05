import React, { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import Card from "./../../components/card";
import BreadProductionTabs from './components/Tabs';
function BreadProductionLayout() {
    return ( 
        <div
       >
                <BreadProductionTabs />
        </div>
     );
}

export default BreadProductionLayout;