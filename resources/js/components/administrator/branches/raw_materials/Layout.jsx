import React, { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import RawMaterialsTable from './components/Table';
function RawMaterialsLayout() {
    return ( 
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
          <RawMaterialsTable />
        </Box>
     );
}

export default RawMaterialsLayout;