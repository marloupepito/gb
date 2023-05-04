import {Flex,Table,Progress,Icon,Tbody,Td,Text,Th,Thead,Tr,useColorModeValue,Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    ButtonGroup,} from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';

// Custom components
import Card from "./../../../components/card";
import RawMaterialsMenu from "./Menu";
// Assets
import {
    MdArrowCircleRight,
    MdOutlineError,
} from "react-icons/md";

import { GetAllUsers } from "../../../../api/Account";
import { DeleteIcon } from '@chakra-ui/icons'
import { useLocation, useNavigate,useParams } from "react-router-dom";
import { DeleteAccountAPI } from "../../../../api/Account";
export default function AccountsTable(props) {
    const [tableData,setTableData] = useState([]);
    const { branchid } = useParams();
    const navigate = useNavigate()
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
    let location = useLocation().hash;
   useEffect(() => {
    GetAllUsers(branchid).then(res=>{
        setTableData(res.data.status)
    })
   }, [location]);

   const showAccount =(id)=>{
    navigate('/administrator/branch/'+branchid+'/accounts/profile/'+id)
   
   }
   const deleteHandler =(id)=>{
    DeleteAccountAPI(id).then(res=>{
        navigate('/administrator/branch/'+branchid+'/accounts'+'#'+Math.random())
    })
   }
   
    return (
        <Card
            direction="column"
            w="100%"
            px="0px"
            overflowX={{ sm: "scroll", lg: "hidden" }}
        >
            
            <Flex px="25px" justify="space-between" mb="20px" align="center">
                
            <RawMaterialsMenu />
                <Text
                    color={textColor}
                    fontSize="22px"
                    fontWeight="700"
                    lineHeight="100%"
                >
                   Accounts
                </Text>
            </Flex>
            <Table size="sm" variant="simple" color="gray.500" mb="24px">
                <Thead>
                    <Tr>
                        <Th pe="10px">
                            <Flex
                                justify="space-between"
                                align="center"
                                fontSize={{ sm: "10px", lg: "12px" }}
                                color="gray.400"
                            ></Flex>
                          Employees
                        </Th>
                        <Th pe="10px">
                            <Flex
                                justify="space-between"
                                align="center"
                                fontSize={{ sm: "10px", lg: "12px" }}
                                color="gray.400"
                            ></Flex>
                            Position
                        </Th>
                        <Th pe="10px">
                            <Flex
                                justify="space-between"
                                align="center"
                                fontSize={{ sm: "10px", lg: "12px" }}
                                color="gray.400"
                            ></Flex>
                            Status
                        </Th>
                        <Th pe="10px">
                            <Flex
                                justify="space-between"
                                align="center"
                                fontSize={{ sm: "10px", lg: "12px" }}
                                color="gray.400"
                            ></Flex>
                            Action
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tableData.map((res) => (
                        <Tr key={res.id}>
                            <Td>
                                <Flex align="center">
                                    <Text
                                        color={textColor}
                                        fontSize="sm"
                                        fontWeight="700"
                                    >
                                        {res.name}
                                    </Text>
                                </Flex>
                            </Td>
                            <Td>
                                <Flex align="center">
                                    <Text
                                        color={textColor}
                                        fontSize="sm"
                                        fontWeight="700"
                                    >
                                        {res.position}
                                    </Text>
                                </Flex>
                            </Td>
                            <Td>
                                <Popover matchWidth={true} placement='top-start'>
                                <PopoverTrigger>
                                <Button  leftIcon={<DeleteIcon />}  size="sm" colorScheme='red' variant='outline'>
                                    Delete
                                </Button>
                                </PopoverTrigger>
                                <PopoverContent mr="5" >
                                    <PopoverHeader  fontWeight='semibold'>Account Deletion</PopoverHeader>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverFooter display='flex' justifyContent='flex-end'>
                                        <ButtonGroup size='sm'>
                                        <Button onClick={() =>deleteHandler(res.id)} colorScheme='red'>Delete</Button>
                                        </ButtonGroup>
                                    </PopoverFooter>
                                </PopoverContent>
                                </Popover>
                            </Td>
                            <Td>
                            <Button onClick={()=>showAccount(res.id)} size="sm" rightIcon={<MdArrowCircleRight />} colorScheme='blue' variant='outline'>
                                Show
                            </Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Card>
    );
}
