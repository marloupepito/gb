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
    Text,
    Select,
    NumberInput,
    NumberInputField,
} from "@chakra-ui/react";

import { MdModeEdit } from "react-icons/md";
import { createBranchIngredientsAPI } from "../../../../api/BranchIngredients";
import { useLocation, useNavigate,useParams } from "react-router-dom";
export default function CreateRawMaterialsDrawer(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [bind, setBind] = useState("");
    const [quantity, setQuantity] = useState("");
    const [alert, setAlert] = useState("");
    const btnRef = React.useRef();
    let location = useLocation().pathname;
    const navigate = useNavigate();
    const { branchid } = useParams();

    const onOpen = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };

    const inputNameHander = (e) => {
        setName(e.target.value);
    };

    const inputBindHander = (e) => {
        setBind(e.target.value);
    };
    const inputQuantityHander = (e) => {
        setQuantity(e.target.value);
    };

    const inputAlertHander = (e) => {
        setAlert(e.target.value);
    };
    const submitEvent = (e) => {
        e.preventDefault();
        setIsOpen(false);
        createBranchIngredientsAPI({
            branch_id:branchid,
            ingredients_name: name,
            ingredients_quantity: quantity,
            bind_name: bind,
            notify: alert,
        });
        navigate(location + "#" + Math.random());
    };
    return (
        <>
            <a href="#" ref={btnRef} colorscheme="teal" onClick={onOpen}>
                <Text fontSize="sm" fontWeight="400">
                    Add Raw Materials
                </Text>
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
                        <DrawerHeader>Create Raw Material</DrawerHeader>

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
                                <NumberInput defaultValue={alert}>
                                    <NumberInputField
                                        onChange={inputAlertHander}
                                        name="notify"
                                    />
                                </NumberInput>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Quantities</FormLabel>
                                <NumberInput defaultValue={quantity}>
                                    <NumberInputField
                                        onChange={inputQuantityHander}
                                        name="ingredients_quantity"
                                    />
                                </NumberInput>
                            </FormControl>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button type="submit" colorscheme="blue">
                                Save
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </form>
            </Drawer>
        </>
    );
}
