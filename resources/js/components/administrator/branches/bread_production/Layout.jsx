import React, { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import Card from "./../../components/card";
import BreadProductionTabs from './components/Tabs';
function BreadProductionLayout() {
    return ( 
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
                <BreadProductionTabs />
        </Box>
     );
}

export default BreadProductionLayout;