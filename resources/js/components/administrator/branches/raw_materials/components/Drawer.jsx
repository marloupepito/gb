import React, { useState, useEffect } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Icon,
    Button,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
    NumberInput,
    NumberInputField,
} from "@chakra-ui/react";

import { MdModeEdit } from "react-icons/md";
import { updateBranchIngredientsAPI } from "../../../../api/BranchIngredients";
import { useLocation,useNavigate } from 'react-router-dom';
export default function RawMaterialsDrawer(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState(props.data.ingredients_name);
    const [bind, setBind] = useState(props.data.bind_name);
    const [quantity, setQuantity] = useState(props.data.ingredients_quantity);
    const [alert, setAlert] = useState(props.data.notify);
    const btnRef = React.useRef();
    let location = useLocation().pathname;
    const navigate = useNavigate()

    const onOpen = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };

    const inputNameHander = (e) => {
        setName(e.target.value)
    };

    const inputBindHander = (e) => {
        setBind(e.target.value)
    };
    const inputQuantityHander = (e) => {
        setQuantity(e.target.value)
    };

    const inputAlertHander = (e) => {
        setAlert(e.target.value)
    };
    
    
    const submitEvent = (e) => {
        e.preventDefault()
        setIsOpen(false)
        updateBranchIngredientsAPI({
            id:props.data.id,
            ingredients_name:name,
            ingredients_quantity:quantity,
            bind_name:bind,
            notify:alert,
        })
        navigate(location+'#'+Math.random())
    };
    return (
        <>
            <a href="#" ref={btnRef} colorscheme="teal" onClick={onOpen}>
            <div className={`rounded-full text-xl`}>
                <MdModeEdit onClick={onOpen} className="text-blue-500" />
            </div>
              
            </a>
            <Drawer
                size={"md"}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <form onSubmit={submitEvent}>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Edit Raw Material</DrawerHeader>

                        <DrawerBody>
                            <FormControl isRequired>
                                <FormLabel>Name of Ingredients</FormLabel>
                                <Input
                                    defaultValue={name}
                                    onChange={inputNameHander}
                                    name="ingredients_name"
                                    placeholder="Name of Ingredients"
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Bundle</FormLabel>
                                <Select
                                defaultValue={bind}
                                    onInput={inputBindHander}
                                    name="bind_name"
                                    placeholder="Select Bundle"
                                >
                                    <option>Kilo</option>
                                    <option>Pcs</option>
                                </Select>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Notification Alert</FormLabel>
                                <NumberInput  defaultValue={alert}>
                                    <NumberInputField onChange={inputAlertHander} name="notify"/>
                                </NumberInput>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Quantities</FormLabel>
                                <NumberInput defaultValue={quantity}>
                                    <NumberInputField  onChange={inputQuantityHander} name="ingredients_quantity"/>
                                </NumberInput>
                            </FormControl>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button type="submit" colorscheme="blue">Save</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </form>
            </Drawer>
        </>
    );
}
