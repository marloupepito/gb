import {Flex,Table,Progress,Icon,Tbody,Td,Text,Th,Thead,Tr,useColorModeValue,Button} from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
// Custom components
import Card from "./../../../../../components/card";
import BeginningMenu from "./Menu";
// Assets
import CreateBeginningProduction from "./../components/Drawer1";
import { GetAllProductionAPI } from "../../../../../../api/Production";
import { useParams,useLocation } from 'react-router-dom';
import moment from "moment/moment";
import { BeginningCreateModal } from "./Modal";
import UpdateBeginningProduction from "./Drawer2";
export default function BeginningTable(props) {
    const { branchid } = useParams();
    const [data,setData] = useState([])
    let hash = useLocation().hash;
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
        useEffect(() => {
            GetAllProductionAPI(branchid).then(res=>{
                setData(res.data.status)
            })
        }, [hash]);
   
    return (
        <div
        >
            
            <Flex px="25px" mb="20px" align="center">
                
            <BeginningMenu />
                <Text
                    ml="4"
                    color={textColor}
                    fontSize="22px"
                    fontWeight="700"
                    lineHeight="100%"
                >
                    Beginning of Production
                </Text>
            </Flex>
            <div className="mt-8 overflow-x-scroll xl:overflow-hidden">
            <Table variant="simple" color="gray.500" mb="24px">
                <Thead>
                    <Tr>
                        <Th pe="10px">
                            <Flex
                                justify="space-between"
                                align="center"
                                fontSize={{ sm: "10px", lg: "12px" }}
                                color="gray.400"
                            ></Flex>
                            Name of Bread
                        </Th>
                        <Th pe="10px">
                            <Flex
                                justify="space-between"
                                align="center"
                                fontSize={{ sm: "10px", lg: "12px" }}
                                color="gray.400"
                            ></Flex>
                           Quantity of Production
                        </Th>
                        <Th pe="10px">
                            <Flex
                                justify="space-between"
                                align="center"
                                fontSize={{ sm: "10px", lg: "12px" }}
                                color="gray.400"
                            ></Flex>
                            Created At
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
                        <Th pe="10px">
                            <Flex
                                justify="space-between"
                                align="center"
                                fontSize={{ sm: "10px", lg: "12px" }}
                                color="gray.400"
                            ></Flex>
                            Options
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((res) => (
                        <Tr key={res.id}>
                            <Td>
                                <Flex align="center">
                                    <Text
                                        color={textColor}
                                        fontSize="sm"
                                        fontWeight="700"
                                    >
                                        {res.bread_name}
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
                                        {res.production_quantity}
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
                                       { moment(res.created_at).format('LLL')}
                                    </Text>
                                </Flex>
                            </Td>
                            <Td>
                                <Flex align="center">
                                   <BeginningCreateModal data={res}/>
                                </Flex>
                            </Td>
                            <Td>
                                <Flex align="center">
                                       <UpdateBeginningProduction data={res} />
                                    &nbsp;&nbsp;
                                    <Button>
                                   sss
                                       
                                    </Button>
                                </Flex>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            </div>
        </div>
    );
}
