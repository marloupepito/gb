import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    } from "@chakra-ui/modal";
    import { useDisclosure } from "@chakra-ui/hooks";
   import Card from '../administrator/components/card';
     
function LogoutSession(props) {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
      const handleOk = () => {
        setLoading(true)
        axios.post('/logout')
        .then(res=>{
          localStorage.clear();
           navigate("/");
           setIsModalOpen(false);
           setLoading(false)
        })
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      const onOpen = () => {
        setIsModalOpen(true)
      }

      useEffect(() => {
        setIsModalOpen(props.show)
      }, [props.show]);

    return ( 
        <>
         <a
               onClick={onOpen}
                
                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                >
                  Log Out
                </a>
  <Modal isOpen={isModalOpen} onClose={handleCancel} className="!z-[1010]">
    <ModalOverlay className="bg-[#000] !opacity-30" />
    <ModalContent >
      <ModalBody class="p-0">
        <Card extra="px-[30px] pt-[35px] pb-[40px] max-w-[450px] flex flex-col !z-[1004]">
          <h1 className="mb-[20px] text-2xl font-bold">Logout Session</h1>
          <div className=" float-right">
            <button
            onClick={handleOk}
              className="float-right linear rounded-xl border-2 border-red-500 px-3 py-2.5 text-base font-medium text-red-500 transition duration-200 hover:bg-red-600/5 active:bg-red-700/5 dark:border-red-400 dark:bg-red-400/10 dark:text-white dark:hover:bg-red-300/10 dark:active:bg-red-200/10"
            >
              Logout
            </button>
          </div>
        </Card>
      </ModalBody>
    </ModalContent>
  </Modal>
        
      
        </>
     );
}

export default LogoutSession;