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
import Swal from "sweetalert2";
export default function BakersReportDrawer(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { branchid } = useParams();
    // const [formData,setFormData] = useState({
    //     current:props.data.production,
    //     charge:props.data.charge,
    //     remarks:''
    // })
    const [current,setCurrent] = useState(props.data.production)
    const [charge,setCharge] = useState(props.data.charge)
    const [remark,setRemark] = useState('')
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
        const data = {
            charge:charge,
            branchid:branchid,
            production:current,
            remarks:remark,
            id:props.data.key,
            assigned:JSON.parse(localStorage.getItem("user")).name,
            userid:JSON.parse(localStorage.getItem("user")).id,
            date:moment().format('MMMM DD, YYYY A')
          }
    GoToBreadReportAPI(data)
       .then(res=>{
        console.log(res.data.status)
        if(res.data.status === 'success'){
            Swal.fire({
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            setIsOpen(false);
            setLoading(false)
            navigate(location+'#'+Math.random())
          }
       })
        
          
          
    }
    return (
        <>
            <Button
            className="  bg-brand-500    text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" 
                variant="outline"
                size="sm"
                colorscheme="red"
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
                                    defaultValue={current}
                                     onChange={(e)=>setCurrent(e)}
                                >
                                    <NumberInputField name="current" />
                                </NumberInput>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Charge pieces</FormLabel>
                                <NumberInput
                                    defaultValue={charge}
                                    onChange={(e)=>setCharge(e)}
                                >
                                    <NumberInputField name="charge" />
                                </NumberInput>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Remarks</FormLabel>

                                <Textarea  onChange={(e)=>setRemark(e.target.value)} defaultValue={remark} placeholder="Write your remarks here!" />
                            </FormControl>
                        </DrawerBody>
                        <DrawerFooter borderTopWidth="1px">
                            <Button className="  bg-red-500    text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200"  variant="outline" mr={3}>
                                Cancel
                            </Button>
                            <Button
                            isLoading={loading}
                                variant="outline"
                                type="submit"
                                className="  bg-brand-500    text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" 
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
