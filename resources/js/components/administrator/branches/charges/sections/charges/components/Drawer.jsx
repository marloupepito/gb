import React, { useState, useEffect } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    FormControl,
    FormLabel,
    Select,
    NumberInput,
    NumberInputField,
    Textarea
} from "@chakra-ui/react";
import { useLocation,useNavigate,useParams } from 'react-router-dom';
import { createCreditsAPI } from "../../../../../../api/Credits";
import { GetEveryAccount } from "../../../../../../api/Account";
import moment from "moment";
export default function ChargesSectionDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState([]);
    const { branchid,accountid } = useParams();
    const [loading, setLoading] = useState(false)
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    let location = useLocation().pathname;
    const navigate = useNavigate()
    const [items, setItems] = useState({
        name:'',
        position:'',
        shift:'',
        username:'',
        password:'',
        mobile:'',
        gender:'',
    });
    const btnRef = React.useRef();
    useEffect(() => {
        GetEveryAccount(accountid).then(res=>{
            setUser(res.data.status)
        })
    }, [accountid]);
    const onOpen = (e) => {
        setIsOpen(true);
    };
    const onClose = (e) => {
        setIsOpen(false);
    };
    const createCredits = (e) => {
        setLoading(true)
        e.preventDefault()
        const data = {
            type:'Charges',
            name:user.name,
            description:description,
            amount:amount,
            branch_id:branchid,
            date:moment().format('LLL'),
            userid:user.id,
        }
     //   console.log(createCreditsAPI(data))
          createCreditsAPI(data).then(res=>{
                console.log(res.data.status)
                navigate(location+'#'+Math.random())
                setLoading(false)
                setIsOpen(false);
          })
        
        
    };

    return (
        <>
            <a ref={btnRef} onClick={onOpen}>
                Create Charges
            </a>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />

                <form onSubmit={createCredits}>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Create Credits</DrawerHeader>

                        <DrawerBody>

                        <FormLabel>Name: {user.name}</FormLabel>

                        <FormControl isRequired>
                                <FormLabel>Description</FormLabel>
                                   <Textarea  onChange={(event) =>
                                        setDescription(event.target.value)
                                    } placeholder='Write your description here' /> 
                            </FormControl>


                            <FormControl isRequired>
                                <FormLabel>Amount</FormLabel>
                                <Input
                                    type="number"
                                    onChange={(event) =>
                                        setAmount(event.target.value)
                                    }
                                    name="name"
                                    placeholder="Input amount"
                                />
                            </FormControl>

                           
                        </DrawerBody>

                        <DrawerFooter>
                            <Button className="  bg-red-500    text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200" variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button className="  bg-brand-500    text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" variant="outline" isLoading={loading} type="submit" colorscheme="red">
                                Save
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </form>
            </Drawer>
        </>
    );
}
