import {Flex,Table,Progress,Badge,Icon,Tbody,Td,Text,Th,Thead,Tr,useColorModeValue,} from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
import { GetBreadReportAPI } from "./../../../../../../api/Report";
import Card from "./../../../../../components/card";
import { useParams,useLocation } from 'react-router-dom';
import BakersReportDrawer from "./Drawer";
import moment from "moment/moment";
// import { BeginningCreateModal } from "./Modal";
// import UpdateBeginningProduction from "./Drawer2";



export default function BreadBakersReportTable(props) {
    const { branchid } = useParams();
    const [data,setData] = useState([])
    let hash = useLocation().hash;
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
        useEffect(() => {
            GetBreadReportAPI(branchid).then(res=>{
                setData(res.data.status)
            })
        }, [hash]);


    return (
        <Card
            direction="column"
            w="100%"
            px="0px"
            overflowX={{ sm: "scroll", lg: "hidden" }}
        >
            
            <Flex px="25px" mb="20px" align="center">
                
                <Text
                    color={textColor}
                    fontSize="22px"
                    fontWeight="700"
                    lineHeight="100%"
                >
                    Bread Reports
                </Text>
            </Flex>
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
                          Beginning
                        </Th>
                        <Th pe="10px">
                            <Flex
                                justify="space-between"
                                align="center"
                                fontSize={{ sm: "10px", lg: "12px" }}
                                color="gray.400"
                            ></Flex>
                          New Production
                        </Th>
                        <Th pe="10px">
                            <Flex
                                justify="space-between"
                                align="center"
                                fontSize={{ sm: "10px", lg: "12px" }}
                                color="gray.400"
                            ></Flex>
                            Charges
                        </Th>
                        <Th pe="10px">
                            <Flex
                                justify="space-between"
                                align="center"
                                fontSize={{ sm: "10px", lg: "12px" }}
                                color="gray.400"
                            ></Flex>
                            Total
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
                    {data.map((res) => (
                        <Tr key={res.key}>
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
                                        {res.beginning}
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
                                          <Badge ml='1' colorScheme='green'>
                                          {res.production}
                                          </Badge>
                                      
                                       {/* { moment(res.created_at).format('LLL')} */}
                                    </Text>
                                </Flex>
                            </Td>
                            <Td>
                                   <Text
                                        color={textColor}
                                        fontSize="sm"
                                        fontWeight="700"
                                    >
                                        <Badge ml='1' colorScheme='red'>
                                        {res.charge}
                                        </Badge>
                                        
                                    </Text>
                            </Td>
                            <Td>
                            <Text
                                        color={textColor}
                                        fontSize="sm"
                                        fontWeight="700"
                                    >
                                        {res.total}
                                    </Text>
                            </Td>
                            <Td>
                                <Flex align="center">
                                   <BakersReportDrawer data={res}/>
                                </Flex>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Card>
    );
}
