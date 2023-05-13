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
    Stack,
    FormControl,
    FormLabel,
    Select,
    NumberInput,
    NumberInputField,
} from "@chakra-ui/react";
import { BranchBreadAPI } from "../../../../../../api/BranchBread";
import { BranchIngredientsAPI } from "../../../../../../api/BranchIngredients";
import { useParams } from "react-router-dom";
import {AddProductionAPI} from "../../../../../../api/Production";
import { useLocation,useNavigate } from 'react-router-dom';
function CreateBeginningProduction(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [breadName, setBreadName] = useState("");
    const [target, setTarget] = useState("");
    const { branchid } = useParams();
    let location = useLocation().pathname;
    const navigate = useNavigate()
    const [items, setItems] = useState([]);
    const [ingredientsList, setIngredientsList] = useState([]);
    const [chakras, setChakras] = useState([]);
    const firstField = React.useRef();

   
    
   
    const onOpen = () => {
        setIsOpen(true);
        BranchBreadAPI().data.then(res=>{
            setChakras(res.data.status)
        })
        BranchIngredientsAPI(branchid).data.then(res=>{
            setIngredientsList(res.data.status)
        })
    };
    const onClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const breadid = breadName
        setIsOpen(false)
        AddProductionAPI({
            target:target,
            breadid:breadid,
            branchid:branchid,
            data:items,
          })
          navigate(location+'#'+Math.random())
          setItems([])
          setBreadName('')
          setTarget('')
    };
    const breadNameHandler = (e) => {
        setBreadName(e.target.value);
    };
    const targetHandler = (e) => {
        setTarget(e.target.value);
    };

    function handleInputChange(index, event) {
        const { name, value } = event.target;
        const data = [...items];
        data[index][name] = value;
        setItems(data);
        console.log(data)
    }

    function addItem() {
        const newItem = {
            key: "",
            ingredients: "",
            quantity: "",
            bind: "",
        };
        setItems([...items, newItem]);
    }

    function deleteItem(index) {
        const indexToRemove = index;

        items.splice(indexToRemove, 1);
        setItems([...items]);
    }
    return (
        <>
            <a className="text-brand-500" variant="outline" onClick={onOpen}>
                Create Recipes
            </a>
            <Drawer
                size="full"
                isOpen={isOpen}
                placement="left"
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay />
                <form onSubmit={handleSubmit}>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth="1px">
                            Create Bread Recipes
                        </DrawerHeader>

                        <DrawerBody>
                            <Stack spacing="24px"></Stack>
                            <div className="row">
                                <div className="col-md-4">
                                    <FormControl isRequired>
                                        <FormLabel>Name of Bread</FormLabel>
                                        <Select
                                            placeholder="Select a Bread"
                                            onInput={breadNameHandler}
                                            defaultValue={breadName}
                                            name="breadname"
                                        >
                                            {chakras.map((res) => (
                                                <option
                                                    key={res.key}
                                                    value={res.key}
                                                >
                                                    {res.bread_name}
                                                </option>
                                            ))}
                                            ;
                                        </Select>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Target Pieces</FormLabel>
                                        <NumberInput >
                                            <NumberInputField
                                                onChange={targetHandler}
                                                defaultValue={target}
                                                name="target"
                                            />
                                        </NumberInput>
                                    </FormControl>
                                    <center>
                                        <Button
                                           className="mt-5 mb-3 bg-brand-500 text-white"
                                            variant="outline"
                                            type="button"
                                            onClick={addItem}
                                        >
                                            ADDITIONAL INGREDIENTS
                                        </Button>
                                    </center>
                                </div>
                                <div className="col-md-8">
                                    <div className="container">
                                        <div className="col-md-12 col-12">
                                            <FormLabel>Ingredient</FormLabel>
                                        </div>
                                        {items.map((item, index) => (
                                            <div
                                                key={index}
                                                className="row mb-2"
                                            >
                                                <div className="col-md-3 col-3">
                                                    <FormControl isRequired>
                                                        <Select
                                                            name="ingredients"
                                                            value={
                                                                item.ingredients
                                                            }
                                                            placeholder="Select Ingredient"
                                                            onInput={(event) =>
                                                                handleInputChange(
                                                                    index,
                                                                    event
                                                                )
                                                            }
                                                        >
                                                            {ingredientsList.map(
                                                                (res) => (
                                                                    <option
                                                                        key={
                                                                            res.id
                                                                        }
                                                                        value={
                                                                            res.id
                                                                        }
                                                                    >
                                                                        {
                                                                            res.ingredients_name
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                                <div className="col-md-3 col-3">
                                                    <FormControl isRequired>
                                                        <Select
                                                            name="bind"
                                                            value={item.bind}
                                                            onInput={(event) =>
                                                                handleInputChange(
                                                                    index,
                                                                    event
                                                                )
                                                            }
                                                            placeholder="Select Bind"
                                                        >
                                                            <option>
                                                                Kilo
                                                            </option>
                                                            <option>
                                                                Grams
                                                            </option>
                                                            <option>Pcs</option>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                                <div className="col-md-3 col-3">
                                                    <FormControl isRequired>
                                                        <NumberInput
                                                        >
                                                            <NumberInputField  name="quantity"
                                                            value={
                                                                item.quantity
                                                            }
                                                            onChange={(event) =>
                                                                handleInputChange(
                                                                    index,
                                                                    event
                                                                )
                                                            }/>
                                                        </NumberInput>
                                                    </FormControl>
                                                </div>
                                                <div className="col-md-2 col-2">
                                                    <Button
                                                    variant="outline"
                                                        className=" bg-red-500 text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200" 
                                                        onClick={() =>
                                                            deleteItem(index)
                                                        }
                                                    >
                                                        DELETE
                                                    </Button>
                                                </div>
                                                <div className="col-md-1 col-1"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </DrawerBody>

                        <DrawerFooter borderTopWidth="1px">
                            <Button className="  bg-red-500    text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200"  variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button variant="outline" type="submit" className="  bg-brand-500    text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" >
                                Submit
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </form>
            </Drawer>
        </>
    );
}

export default CreateBeginningProduction;
