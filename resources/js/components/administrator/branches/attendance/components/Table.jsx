import React, { useState, useEffect } from 'react';
import Card from '../../../components/card';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    useColorModeValue,
    Flex,
    Text
} from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
function AttendanceTable() {
    let { branchid } = useParams();
    const textColor = useColorModeValue("secondaryGray.900", "white");
    useEffect(() => {
        axios.get('/api/get_branch_attendance/'+branchid)
        .then(res=>{
            console.log(res.data.status)
        })
    }, []);
    return ( 
    <Card  extra={"px-6 pb-6 overflow-x-auto  mt-4"}>
        <Flex px="25px" justify="space-between" mb="20px" align="center">
                <Text
                    color={textColor}
                    fontSize="22px"
                    fontWeight="700"
                    lineHeight="100%"
                    className='mt-3'
                >
                  Daily Attendance
                </Text>
            </Flex>
           <Table variant="simple">
                    <TableCaption >
                        GB Bakeshop Attendance
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Employees</Th>
                            <Th>Position</Th>
                            <Th>Time In</Th>
                            <Th>Time out</Th>
                            <Th>Time In</Th>
                            <Th>Time out</Th>
                            <Th>Total</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Name:</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Shift:</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Mobile:</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Gender:</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Position:</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Username:</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Password:</Td>
                            <Td>None</Td>
                        </Tr>
                    </Tbody>
                </Table>
    </Card>
     );
}

export default AttendanceTable;