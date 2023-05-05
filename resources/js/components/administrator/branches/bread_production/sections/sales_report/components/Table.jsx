import {
    Flex,
    Table,
    Progress,
    Badge,
    Icon,
    Box,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
    Input,
    Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { GetBreadReportAPI } from "../../../../../../api/Report";
import Card from "./../../../../../components/card";
import { useParams, useLocation } from "react-router-dom";
import BakersReportDrawer from "./Drawer";
import moment from "moment";
import SearchDrawerDate from "./SearchDrawer";
import { GetBreadSoldReportAPI } from "../../../../../../api/Report";

export default function SalesReportTable(props) {
    const { branchid } = useParams();
    const [data, setData] = useState([]);
    let location = useLocation();
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
    useEffect(() => {
        const searchParams = location.search.substring(1).replace(/-/g, ' ').replace('.',',')
  
      const searchDate = searchParams === ''?moment().format("MMMM DD, YYYY A"):searchParams
        GetBreadSoldReportAPI({
                branchid: branchid,
                date: searchDate,
            }).then(res=>{
           setData(res.data.status)
        })
        
    }, [location.hash+location.search]);
    
    return (
        <div
        >
            <Flex px="25px" mb="20px" align="center">
               <SearchDrawerDate />
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
                            Price
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
                            Bread Out
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
                            Remaining
                        </Th>
                        <Th pe="10px">
                            <Flex
                                justify="space-between"
                                align="center"
                                fontSize={{ sm: "10px", lg: "12px" }}
                                color="gray.400"
                            ></Flex>
                            Sold
                        </Th>
                        <Th pe="10px">
                            <Flex
                                justify="space-between"
                                align="center"
                                fontSize={{ sm: "10px", lg: "12px" }}
                                color="gray.400"
                            ></Flex>
                            Sales
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
                                        <Badge ml="1" colorScheme="green">
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
                                    <Badge ml="1" colorScheme="green">
                                        {res.price}
                                    </Badge>
                                </Text>
                            </Td>
                            <Td>
                                <Text
                                    color={textColor}
                                    fontSize="sm"
                                    fontWeight="700"
                                >
                                    {res.production === null
                                        ? res.beginning
                                        : parseInt(res.beginning) +
                                          parseInt(res.production)}
                                </Text>
                            </Td>
                            <Td>
                                <Text
                                    color={textColor}
                                    fontSize="sm"
                                    fontWeight="700"
                                >
                                    <Badge ml="1" colorScheme="red">
                                        {res.breadout}
                                    </Badge>
                                </Text>
                            </Td>
                            <Td>
                                <Text
                                    color={textColor}
                                    fontSize="sm"
                                    fontWeight="700"
                                >
                                    <Badge ml="1" colorScheme="red">
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
                                    <Badge ml="1" colorScheme="green">
                                        {res.remaining}
                                    </Badge>
                                </Text>
                            </Td>

                            <Td>
                                <Text
                                    color={textColor}
                                    fontSize="sm"
                                    fontWeight="700"
                                >
                                    <Badge ml="1" colorScheme="green">
                                        {res.soldout}
                                    </Badge>
                                </Text>
                            </Td>
                            <Td>
                                <Text
                                    color={textColor}
                                    fontSize="sm"
                                    fontWeight="700"
                                >
                                    <Badge ml="1" colorScheme="green">
                                        {res.remaining === null
                                            ? 0
                                            : parseInt(res.price) *
                                              parseInt(res.soldout)}
                                    </Badge>
                                </Text>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            </div>
        </div>
    );
}
