// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "../../../../../components/card";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { GetEveryAccount } from "../../../../../../api/Account";
import AccountProfileTabs from "./Tabs";
import avatar from "./../../../../../../assets/img/avatars/avatar11.png";
import banner from "./../../../../../../assets/img/profile/banner.png";
export default function AccountCard(props) {
    const { accountid } = useParams();
      console.log(props)
    const [account,setAccount] = useState([]);
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );

  useEffect(() => {
     GetEveryAccount(accountid).then(res=>{
        setAccount(res.data.status)
    })
  }, [accountid]);
  return (
    <Card
     style={{textTransform: 'capitalize'}} mb={{ base: "0px", lg: "20px" }} align='center'>
      <Box
        bg={`url(${banner})`}
        bgSize='cover'
        borderRadius='16px'
        h='131px'
        w='100%'
      />
      <Avatar
        mx='auto'
        src={avatar}
        h='87px'
        w='87px'
        mt='-43px'
        border='4px solid'
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight='bold' fontSize='xl' mt='10px'>
        {account.name}
      </Text>
      <Text className="text-capitalize" color={textColorSecondary} fontSize='sm'>
        {account.position}
      </Text>
     
      <Box 
      direction="column"
      w="100%"
      px="10px"
      overflowX={{ sm: "scroll", lg: "hidden" }}>
       <AccountProfileTabs />
      </Box>
    </Card>
  );
}
