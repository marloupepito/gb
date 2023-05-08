import React, { useState, useEffect } from 'react';
import Card from '../../../../../components/card';
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
} from "@chakra-ui/react";

import { GetEveryAccount } from "../../../../../../api/Account";
import { useParams } from "react-router-dom";
function AccountAttendanceTable() {
    const { accountid } = useParams();
    const [account,setAccount] = useState([]);
    useEffect(() => {
        GetEveryAccount(accountid).then(res=>{
           setAccount(res.data.status)
       })
     }, [accountid]);
    return ( 
    <Card  extra={"px-6 pb-6 overflow-x-auto  mt-4"}>
           <Table variant="simple">
                    <TableCaption>
                        GB Bakeshop Attendance
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Time In</Th>
                            <Th>Time out</Th>
                            <Th>Time In</Th>
                            <Th>Time out</Th>
                            <Th>Total</Th>
                            <Th>Date</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Name:</Td>
                            <Td>{account.name}</Td>
                        </Tr>
                        <Tr>
                            <Td>Shift:</Td>
                            <Td>{account.shift}</Td>
                        </Tr>
                        <Tr>
                            <Td>Mobile:</Td>
                            <Td>{account.mobile}</Td>
                        </Tr>
                        <Tr>
                            <Td>Gender:</Td>
                            <Td>{account.gender}</Td>
                        </Tr>
                        <Tr>
                            <Td>Position:</Td>
                            <Td>{account.position}</Td>
                        </Tr>
                        <Tr>
                            <Td>Username:</Td>
                            <Td>{account.username}</Td>
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

export default AccountAttendanceTable;