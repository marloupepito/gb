import React, { useState, useEffect } from "react";
import { useParams,useLocation,useNavigate } from 'react-router-dom';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Textarea,
    NumberInput,
    NumberInputField,
    FormControl,
    FormLabel,
    Text
} from "@chakra-ui/react";
import moment from 'moment'
import { AddBreadSoldReportAPI } from "../../../../../../api/Report";
export default function BreadReportDrawer(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { branchid } = useParams();
  
    const [remaining, setRemaining] = useState(props.data.production);
    const [breadout, setBreadout] = useState(0);
    const [remarks, setRemarks] = useState('');
    let location = useLocation().pathname;
    const navigate = useNavigate()
  

    const onClose = () => {
        setIsOpen(false);
    };

    const onOpen = () => {
        setIsOpen(true);
    };
  
    const nextTransaction =(e) =>{
        e.preventDefault()
        setLoading(true)
      
        const status = AddBreadSoldReportAPI({
            breadid:props.data.key,
            branchid:branchid,
            remaining:remaining,
            remarks:remarks,
            assigned:JSON.parse(localStorage.getItem("user")).name,
            breadout:breadout,
            date:moment().format('MMMM DD, YYYY A')
          })
          if(status === 'success'){
            setIsOpen(false);
            setLoading(false)
            navigate(location+'#'+Math.random())
          }
          
    }
    return (
        <>
            <Button
                variant="outline"
                size="sm"
                className="  bg-brand-500    text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" 
                onClick={() => onOpen()}
            >
                Check
            </Button>
            <Drawer
                placement="left"
                onClose={onClose}
                isOpen={isOpen}
                size="lg"
            >
                <DrawerOverlay />
                <form onSubmit={nextTransaction}>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Input Bread Remaining</DrawerHeader>
                        <DrawerBody>
                            <Text
                                color="red.600"
                                fontSize="sm"
                                fontWeight="700"
                            >
                               Please make sure your inventory is accurate; the administrator is monitoring every transaction.
                            </Text>
                            <FormControl isRequired>
                                <FormLabel>Remaining</FormLabel>
                                <NumberInput
                                    defaultValue={remaining}
                                     onChange={(e)=>setRemaining(e)}
                                >
                                    <NumberInputField name="remaining" />
                                </NumberInput>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Breadout</FormLabel>
                                <NumberInput
                                    defaultValue={breadout}
                                    onChange={(e)=>setBreadout(e)}
                                >
                                    <NumberInputField name="breadout" />
                                </NumberInput>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Remarks</FormLabel>

                                <Textarea defaultValue={remarks} onChange={(e)=>setRemarks(e.target.value)} placeholder="Write your remarks here!" />
                            </FormControl>
                        </DrawerBody>
                        <DrawerFooter borderTopWidth="1px">
                            <Button className="  bg-red-500    text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200"  variant="outline" mr={3}>
                                Cancel
                            </Button>
                            <Button
                            className="  bg-brand-500    text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" 
                            isLoading={loading}
                                variant="outline"
                                type="submit"
                                colorscheme="red"
                            >
                                Submit
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </form>
            </Drawer>
        </>
    );
}
