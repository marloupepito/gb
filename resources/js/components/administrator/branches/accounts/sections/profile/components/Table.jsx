import React, { useState, useEffect } from "react";
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
function TableInformation() {
    const { accountid } = useParams();
    const [account,setAccount] = useState([]);
    useEffect(() => {
        GetEveryAccount(accountid).then(res=>{
           setAccount(res.data.status)
       })
     }, [accountid]);
    return (
        <>
                <Table variant="simple">
                    <TableCaption>
                        GB Bakeshop Personal Information
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Basic Information</Th>
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
        </>
    );
}

export default TableInformation;
