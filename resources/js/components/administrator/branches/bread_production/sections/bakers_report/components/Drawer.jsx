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
import { GoToBreadReportAPI } from "../../../../../../api/Report";
export default function BakersReportDrawer(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { branchid } = useParams();
    const [formData,setFormData] = useState({
        current:props.data.production,
        charge:props.data.charge,
        remarks:''
    })
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
        const status = GoToBreadReportAPI({
            charge:formData.charge,
            branchid:branchid,
            production:formData.current,
            remarks:formData.remarks,
            id:props.data.key,
            assigned:JSON.parse(localStorage.getItem("user")).name,
            userid:JSON.parse(localStorage.getItem("user")).id,
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
                colorScheme="red"
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
                        <DrawerHeader>Bread Review</DrawerHeader>
                        <DrawerBody>
                            <Text
                                color="red.600"
                                fontSize="sm"
                                fontWeight="700"
                            >
                               Please make sure your inventory is accurate; the administrator is monitoring every transaction.
                            </Text>
                            <FormControl isRequired>
                                <FormLabel>Current pieces</FormLabel>
                                <NumberInput
                                    defaultValue={formData.current}
                                    // onChange={quantityHandler}
                                >
                                    <NumberInputField name="current" />
                                </NumberInput>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Charge pieces</FormLabel>
                                <NumberInput
                                    defaultValue={formData.charge}
                                    // onChange={quantityHandler}
                                >
                                    <NumberInputField name="charge" />
                                </NumberInput>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Remarks</FormLabel>

                                <Textarea defaultValue={formData.remarks} placeholder="Write your remarks here!" />
                            </FormControl>
                        </DrawerBody>
                        <DrawerFooter borderTopWidth="1px">
                            <Button variant="outline" mr={3}>
                                Cancel
                            </Button>
                            <Button
                            isLoading={loading}
                                variant="outline"
                                type="submit"
                                colorScheme="red"
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
