import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import AttendanceTable from './components/Table';
function AttendanceLayout() {
    return ( 
        <Box className="mt-3">
        <AttendanceTable />
        </Box>
     );
}

export default AttendanceLayout;