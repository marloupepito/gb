import React, { useState, useEffect } from 'react';
import { Flex,Text,useColorModeValue } from '@chakra-ui/react';
import CreditsSectionMenu from './Menu';
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
  } from '@chakra-ui/react'
  import { useParams,useLocation } from 'react-router-dom';
  import { getEveryAccountCreditsAPI } from '../../../../../../api/Credits';
function CreditSectionTable() {
    const {accountid} = useParams()
    const [data,setData] = useState([])
    let location = useLocation().hash;
    useEffect(() => {
        getEveryAccountCreditsAPI(accountid)
        .then(res=>{
            setData(res.data.status)
        })
    }, [accountid+location]);
    const textColor = useColorModeValue("secondaryGray.900", "white");
    return ( 
        <>
            <Flex px="25px" justify="space-between" mb="20px" align="center">
            <CreditsSectionMenu />
                <Text
                    color={textColor}
                    fontSize="22px"
                    fontWeight="700"
                    lineHeight="100%"
                >
                   Credit List
                </Text>
            </Flex>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Employee Credit Records</TableCaption>
                    <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Amount</Th>
                        <Th>Description</Th>
                        <Th>Date</Th>
                        <Th>Status</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data.map(res=>  <Tr key={res.key}>
                                <Td>{res.name}</Td>
                                <Td>{res.amount}</Td>
                                <Td>{res.description}</Td>
                                <Td>{res.date}</Td>
                                <Td>{res.status}</Td>
                            </Tr>
                         )
                        }
                  
                    </Tbody>
                   
                </Table>
                </TableContainer>
        </>
     );
}

export default CreditSectionTable;