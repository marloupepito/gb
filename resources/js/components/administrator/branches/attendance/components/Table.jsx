import React, { useState, useEffect } from 'react';
import Card from '../../../components/card';
import { getBranchAttendance } from '../../../../api/Attendance';
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
    const [data,setData] = useState([]);
    const textColor = useColorModeValue("secondaryGray.900", "white");
    useEffect(() => {
        getBranchAttendance(branchid)
        .then(res=>{
            setData(res.data.status)
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
           <Table variant="simple" size='sm'>
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
                            <Th>Time In</Th>
                            <Th>Time out</Th>
                            <Th>Time In</Th>
                            <Th>Time out</Th>
                            <Th>Total</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data.map(res=> <Tr key={res.id}>
                                <Td>{res.attendance_belongs_to_account.name}</Td>
                                <Td>{res.attendance_belongs_to_account.position}</Td>
                                <Td>{res.time_in1 === null?'none':res.time_in1}</Td>
                                <Td>{res.time_out1 === null?'none':res.time_out1}</Td>
                                <Td>{res.time_in2 === null?'none':res.time_in2}</Td>
                                <Td>{res.time_out2 === null?'none':res.time_out2}</Td>
                                <Td>{res.time_in3 === null?'none':res.time_in3}</Td>
                                <Td>{res.time_out3 === null?'none':res.time_out3}</Td>
                                <Td>{res.time_in4 === null?'none':res.time_in4}</Td>
                                <Td>{res.time_out4 === null?'none':res.time_out4}</Td>
                                <Td>{res.total === null?'none':res.total.substring(0,5)}</Td>
                            </Tr>)
                        }
                       
                     
                    </Tbody>
                </Table>
    </Card>
     );
}

export default AttendanceTable;