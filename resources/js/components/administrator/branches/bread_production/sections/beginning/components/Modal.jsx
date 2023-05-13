import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Icon,
    Text,
    NumberInput,
    NumberInputField,
    FormControl,
    FormLabel,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Stack,
    TableContainer,
} from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
// import { deleteItem } from "../../../api/BranchIngredients";
import { MdAddCircle } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import moment from "moment";
import {
    GetProductionCodeAPI,
    AddBreadListAPI,
} from "../../../../../../api/Production";
export function BeginningCreateModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [target, setTarget] = useState(props.data.production_quantity * 1);
    const [data, setData] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const cancelRef = React.useRef();
    let location = useLocation().pathname;
    const navigate = useNavigate();
    const firstField = React.useRef();
    const { branchid } = useParams();
    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        const datas = {
            data: data,
            branchid: branchid,
            quantity: quantity,
            target: props.data.production_quantity * quantity,
            actualTarget: target,
            baker_id: JSON.parse(localStorage.getItem("user")).id,
            baker: JSON.parse(localStorage.getItem("user")).name,
            date: moment().format("MMMM DD, YYYY A"),
        };
        AddBreadListAPI(datas).then((res) => {
            setLoading(false);
            setIsOpen(false);
        });
    };
    const onOpen = () => {
        setIsOpen(true);

        GetProductionCodeAPI(props.data.random_id).then((res) => {
            setData(res.data.status);
            const values = res.data.status.map((res) =>
                res.bind === "Grams"
                    ? res.ingredients_quantity - parseInt(res.quantity) / 1000
                    : res.ingredients_quantity - res.quantity
            );
            let hasNegative = values.some((v) => v < 0);
            if (!hasNegative) {
                setDisabled(false);
            } else {
                setDisabled(true);
            }
        });
    };
    const onClose = () => {
        setIsOpen(false);
    };

    const quantityHandler = (e) => {
        setQuantity(e);
    };
    return (
        <>
            <Button
                size="sm"
                onClick={onOpen}
                leftIcon={<MdAddCircle />}
                className="  bg-brand-500    text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" 
                variant="outline"
            >
                Create
            </Button>
            <Drawer
                size="lg"
                isOpen={isOpen}
                placement="left"
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay />
                <form onSubmit={submitHandler}>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth="1px">
                            <Text
                                color="secondaryGray.900"
                                fontSize="22px"
                                fontWeight="700"
                                lineHeight="100%"
                            >
                                CREATE {props.data.bread_name} -{" "}
                                {props.data.production_quantity} PCS.
                            </Text>
                        </DrawerHeader>

                        <DrawerBody>
                            <Stack spacing="24px"></Stack>
                            <TableContainer>
                                <Table>
                                    <Thead>
                                        <Tr>
                                            <Th className="p-1">
                                                Name of Bread
                                            </Th>
                                            <Th className="p-1">
                                                {props.data.bread_name}
                                            </Th>
                                        </Tr>
                                        <Tr>
                                            <Th className="p-1">
                                                Target quantity per kilo
                                            </Th>
                                            <Th className="p-1">
                                                {props.data.production_quantity}
                                            </Th>
                                        </Tr>
                                        <Tr>
                                            <Th className="p-1">Main Target</Th>
                                            <Th className="p-1">
                                                {" "}
                                                {props.data
                                                    .production_quantity *
                                                    quantity}
                                            </Th>
                                        </Tr>
                                    </Thead>
                                </Table>
                            </TableContainer>
                            <FormControl isRequired>
                                <FormLabel>Quantities</FormLabel>
                                <NumberInput
                                    defaultValue={quantity}
                                    onChange={quantityHandler}
                                >
                                    <NumberInputField name="quantity" />
                                </NumberInput>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Actual Target</FormLabel>
                                <NumberInput
                                    defaultValue={target}
                                    onChange={(e) => {
                                        setTarget(e);
                                    }}
                                >
                                    <NumberInputField name="actualTarget" />
                                </NumberInput>
                            </FormControl>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Ingredients</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Current Remaining</th>
                                        <th scope="col">Calculation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((res) => (
                                        <tr key={res.id + Math.random()}>
                                            <th scope="row">
                                                {res.ingredients_name}
                                            </th>
                                            <td>
                                                {res.bind === "Grams"
                                                    ? (parseInt(res.quantity) *
                                                          quantity) /
                                                      1000
                                                    : parseInt(res.quantity) *
                                                      quantity}
                                                {res.bind === "Grams"
                                                    ? "kg"
                                                    : res.bind === "Kilo"
                                                    ? "kg"
                                                    : "pcs"}
                                            </td>
                                            <td>
                                                {res.ingredients_quantity}kg
                                            </td>
                                            <td
                                                className={
                                                    (res.bind === "Grams"
                                                        ? res.quantity -
                                                          (parseInt(
                                                              res.quantity
                                                          ) /
                                                              1000) *
                                                              quantity
                                                        : (res.ingredients_quantity -
                                                              res.quantity) *
                                                          quantity) > 0
                                                        ? ""
                                                        : "text-danger"
                                                }
                                            >
                                                {res.bind === "Grams"
                                                    ? res.ingredients_quantity -
                                                      (parseInt(res.quantity) /
                                                          1000) *
                                                          quantity
                                                    : res.ingredients_quantity -
                                                      res.quantity * quantity}
                                                kg
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </DrawerBody>

                        <DrawerFooter borderTopWidth="1px">
                            <Button className="  bg-red-500    text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200"  variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button variant="outline" className="  bg-brand-500    text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"  type="submit" colorscheme="red">
                                Submit
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </form>
            </Drawer>
        </>
    );
}
