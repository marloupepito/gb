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
                            <Button variant="outline" className="bg-red-500 text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200"  ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button variant="outline" className="bg-brand-500 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"  onClick={DeleteData} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}
