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
    Switch,
    Flex,
    Icon,
    Text,
} from "@chakra-ui/react";
import Calendar from "react-calendar";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
function SearchDrawerDate(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [breadName, setBreadName] = useState("");
    const [target, setTarget] = useState("");
    const { branchid } = useParams();
    let location = useLocation().pathname;
    const navigate = useNavigate();
    const [value, onChange] = useState(new Date());
    const [time, setTime] = useState("AM");
    const firstField = React.useRef();

    const onOpen = () => {
        
        setTime("AM");
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
            const date = moment(value).format("MMMM-DD.-YYYY-")+time
            navigate(location+'?'+date)
           setIsOpen(false);
    };

    const timeHandler = (e) => {
        if (e.target.value === "AM") {
            setTime("PM");
        } else {
            setTime("AM");
        }
    };

    return (
        <>
            <Button
                onClick={onOpen}
                leftIcon={<SearchIcon />}
                className="  bg-brand-500    text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" 
                variant="outline"
            >
                Search
            </Button>

            <Drawer
                size="sm"
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
                            <center>
                                <Calendar
                                    onChange={onChange}
                                    value={value}
                                    // selectRange={selectRange}
                                    view={"month"}
                                    tileContent={<Text color="red.500"></Text>}
                                    prevLabel={
                                        <Icon
                                            as={MdChevronLeft}
                                            w="24px"
                                            h="24px"
                                            mt="4px"
                                        />
                                    }
                                    nextLabel={
                                        <Icon
                                            as={MdChevronRight}
                                            w="24px"
                                            h="24px"
                                            mt="4px"
                                        />
                                    }
                                />
                                  <Flex px="25px" mb="20px" align="center">

                                
                                <Text
                                    mr="4"
                                    color={"secondaryGray.900"}
                                    fontSize="22px"
                                    fontWeight="700"
                                    lineHeight="100%"
                                >
                                   
                                   AM 
                                </Text>
                                <Switch
                                    value={time}
                                    onChange={timeHandler}
                                    colorscheme="red"
                                    size="lg"
                                />
                                <Text
                                    ml="4"
                                    color={"secondaryGray.900"}
                                    fontSize="22px"
                                    fontWeight="700"
                                    lineHeight="100%"
                                >
                                    PM
                                </Text>
                                </Flex>
                            </center>
                        </DrawerBody>

                        <DrawerFooter borderTopWidth="1px">
                            <Button className="  bg-red-500    text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200"  variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button  variant="outline" className="  bg-brand-500    text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" type="submit" colorscheme="red">
                                Search
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </form>
            </Drawer>
        </>
    );
}

export default SearchDrawerDate;
