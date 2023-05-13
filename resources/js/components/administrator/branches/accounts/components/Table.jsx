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
import AccountMenu from "./Menu";
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
   }, [location+branchid]);

   const showAccount =(id)=>{
    navigate('/administrator/branch/'+branchid+'/accounts/profile/'+id)
   
   }
   const deleteHandler =(id)=>{
    DeleteAccountAPI(id).then(res=>{
        navigate('/administrator/branch/'+branchid+'/accounts'+'#'+Math.random())
    })
   }
   
    return (
        <Card extra={"px-6 pb-6 overflow-x-auto pl-0 pr-0"}>    
            <Flex px="25px" justify="space-between" mb="20px" align="center">
            <AccountMenu />
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
                                <Popover placement='top'>
                                <PopoverTrigger>
                                <Button className="  bg-red-500    text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200" leftIcon={<DeleteIcon />}  size="sm" colorscheme='red' variant='outline'>
                                    Delete
                                </Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverHeader  fontWeight='semibold'>Account Deletion</PopoverHeader>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverFooter display='flex' justifyContent='flex-end'>
                                        <ButtonGroup size='sm'>
                                        <Button  variant="outline" className="  bg-red-500    text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200" onClick={() =>deleteHandler(res.id)} colorscheme='red'>Delete</Button>
                                        </ButtonGroup>
                                    </PopoverFooter>
                                </PopoverContent>
                                </Popover>
                            </Td>
                            <Td>
                            <Button className="  bg-brand-500    text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={()=>showAccount(res.id)} size="sm" rightIcon={<MdArrowCircleRight />} colorscheme='blue' variant='outline'>
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
