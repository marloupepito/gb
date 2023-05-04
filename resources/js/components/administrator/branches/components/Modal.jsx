import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    Icon,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { deleteItem } from "../../../api/BranchIngredients";
import {
  MdDeleteOutline,
} from "react-icons/md";
import { useLocation,useNavigate } from 'react-router-dom';


export function ModalDelete(props) {
   const [isOpen,setIsOpen]=useState(false)
    const cancelRef = React.useRef();
    let location = useLocation().pathname;
    const navigate = useNavigate()

    const DeleteData =() =>{
      deleteItem(props.id)
      setIsOpen(false)
        navigate(location+'#'+Math.random())
    }
    const onOpen =() =>{
      setIsOpen(true)
    }
    const onClose =() =>{
      setIsOpen(false)
    }
    return (
        <>
         <div className={`rounded-full text-xl`}>
            <MdDeleteOutline onClick={onOpen} className="text-red-500" />
         </div>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Raw Material
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorscheme="red" onClick={DeleteData} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}
