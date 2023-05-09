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
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useLocation,useNavigate } from 'react-router-dom';
import { AddAccountAPI } from "../../../../api/Account";
export default function AccountDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const { branchid } = useParams();
    const [loading, setLoading] = useState(false)
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

    const onOpen = (e) => {
        setIsOpen(true);
    };
    const onClose = (e) => {
        setIsOpen(false);
    };

    const submitAccount = (e) => {
        setLoading(true)
        e.preventDefault()
        AddAccountAPI({
            data:items,
            branchid:branchid
          }).then(res=>{
            navigate(location+'#'+Math.random())
            setLoading(false)
            setIsOpen(false);
          })
        
        
    };

    return (
        <>
            <a ref={btnRef} onClick={onOpen}>
                Create Account
            </a>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />

                <form onSubmit={submitAccount}>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Create account</DrawerHeader>

                        <DrawerBody>
                            <FormControl isRequired>
                                <FormLabel>Name of Employee</FormLabel>
                                <Input
                                    onChange={(event) =>
                                        setItems({...items,name:event.target.value})
                                    }
                                    name="name"
                                    placeholder="Name of Ingredients"
                                />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Position</FormLabel>
                                <Select
                                    onInput={(event) =>
                                        setItems({...items,position:event.target.value})
                                    }
                                    name="position"
                                    placeholder="Select Bundle"
                                >
                                    <option>Supervisor</option>
                                    <option>Chief Baker</option>
                                    <option>Baker</option>
                                    <option>Cashier</option>
                                    <option>Sales Lady</option>
                                    <option>Lamesador</option>
                                    <option>Hornero</option>
                                </Select>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Shift</FormLabel>
                                <Select
                                    onInput={(event) =>
                                        setItems({...items,shift:event.target.value})
                                    }
                                    name="shift"
                                    placeholder="Select Shift"
                                >
                                    <option>AM</option>
                                    <option>PM</option>
                                </Select>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Username</FormLabel>
                                <Input
                                    onChange={(event) =>
                                        setItems({...items,username:event.target.value})
                                    }
                                    name="username"
                                />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    onChange={(event) =>
                                        setItems({...items,password:event.target.value})
                                    }
                                    type="password"
                                    name="password"
                                />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Mobile Number</FormLabel>
                                <NumberInput
                                >
                                    <NumberInputField 
                                    onChange={(event) =>
                                        setItems({...items,mobile:event.target.value})
                                    } name="mobile" />
                                </NumberInput>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Gender</FormLabel>
                                <Select
                                    onInput={(event) =>
                                        setItems({...items,gender:event.target.value})
                                    }
                                    name="gender"
                                    placeholder="Select Bundle"
                                >
                                    <option>Male</option>
                                    <option>Femail</option>
                                </Select>
                            </FormControl>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button variant="outline" isLoading={loading} type="submit" colorscheme="red">
                                Save
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </form>
            </Drawer>
        </>
    );
}
