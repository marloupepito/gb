import React, { useState, useEffect } from 'react';
import { GetAllUsers } from '../../../../api/Account';
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
    import {
        MdArrowCircleRight,
        MdOutlineError,
    } from "react-icons/md";
import { DeleteIcon } from '@chakra-ui/icons'
import { useLocation, useNavigate,useParams } from "react-router-dom";
import { DeleteAccountAPI } from "../../../../api/Account";
import CreditsMenu from './Menu';

function CreditsTableAccount() {
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

   const showCredits =(id)=>{
    navigate('/administrator/branch/'+branchid+'/credits/'+id)
   
   }
   const deleteHandler =(id)=>{
    DeleteAccountAPI(id).then(res=>{
        navigate('/administrator/branch/'+branchid+'/accounts'+'#'+Math.random())
    })
   }
    return ( 
        <>
        <Flex px="25px" justify="space-between" mb="20px" align="center">
            <CreditsMenu />
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
                            <Button className="  bg-brand-500    text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={()=>showCredits(res.id)} size="sm" rightIcon={<MdArrowCircleRight />} colorscheme='blue' variant='outline'>
                                Show
                            </Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </>
     );
}

export default CreditsTableAccount;