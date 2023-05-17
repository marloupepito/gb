import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Card from '../../components/card';
import CreditsTableAccount from './components/Table';
import { Outlet } from 'react-router-dom';
function CreditsLayout() {
    return ( 
        <Box className="mt-3">
            <div className='row'>
                <div className='col-md-4'>
                <Card
                  style={{textTransform: 'capitalize'}} mb={{ base: "0px", lg: "20px" }} align='center'>
                    <CreditsTableAccount />
                </Card>
                </div>
                <div className='col-md-8'>
                <Card
                  style={{textTransform: 'capitalize'}} mb={{ base: "0px", lg: "20px" }} align='center'>
                    <Outlet />
                </Card>
                </div>
            </div>
              
        </Box>
     );
}

export default CreditsLayout;