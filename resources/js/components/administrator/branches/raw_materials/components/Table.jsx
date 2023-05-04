import {Flex,Table,Progress,Icon,Tbody,Td,Text,Th,Thead,Tr,useColorModeValue,} from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
import CardMenu from "./Menu";
// Custom components
import Card from "./../../../components/card";
import RawMaterialsMenu from "./Menu";
// Assets
import {
    MdCheckCircle,
    MdOutlineError,
} from "react-icons/md";
import {ModalDelete} from './../../components/Modal'
import RawMaterialsDrawer from "./Drawer";
import { BranchIngredientsAPI } from "../../../../api/BranchIngredients";
import { useLocation, useNavigate,useParams } from "react-router-dom";
export default function RawMaterialsTable(props) {
    const [tableData,setTableData] = useState([]);
    const { branchid } = useParams();
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
    let location = useLocation().hash;
   useEffect(() => {
    BranchIngredientsAPI(branchid).data.then(res=>{
        setTableData(res.data.status)
    })
   }, [location]);
    return (
        <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
        <div className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
          Raw Materials List
          </div>
          <CardMenu />
        </div>
  
        <div className="mt-8 overflow-x-scroll xl:overflow-hidden">
          <table className="w-full">
            <thead className="mb-3">
                <tr>
                    <th
                      className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                    >
                      <div className="text-xs tracking-wide text-gray-600">
                      Raw Materials
                      </div>
                    </th>

                    <th
                      className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                    >
                      <div className="text-xs tracking-wide text-gray-600">
                      Bind
                      </div>
                    </th>

                    <th
                      className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                    >
                      <div className="text-xs tracking-wide text-gray-600">
                      Quantity
                      </div>
                    </th>

                    <th
                      className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                    >
                      <div className="text-xs tracking-wide text-gray-600">
                      Status
                      </div>
                    </th>
                    <th
                      className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                    >
                      <div className="text-xs tracking-wide text-gray-600">
                      Option
                      </div>
                    </th>
                </tr>
            </thead>
            <tbody>
            {tableData.map((res) => (
                        <tr key={res.id}>
                            <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                            <div className="text-sm font-bold text-navy-700 dark:text-white">
                            {res.ingredients_name}
                                </div>
                            </td>
                            <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                            <div className="text-sm font-bold text-navy-700 dark:text-white">
                            {res.bind_name}
                                </div>
                               
                            </td>
                            <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                            <div className="text-sm font-bold text-navy-700 dark:text-white">
                            {res.ingredients_quantity}
                                </div>
                            
                            </td>
                            <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                            <div className={`rounded-full text-xl`}>
                                {
                                     parseFloat(
                                        res.ingredients_quantity
                                    ) <= res.notify?<MdCheckCircle className="text-red-500" />:<MdCheckCircle className="text-green-500" />
                                }
                                 
                                </div>
                                
                            </td>
                            <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                            <div className="flex text-lg font-bold text-navy-700 dark:text-white">
                            <div href="#" className="mr-4">
                                <ModalDelete id={res.id}/>
                            </div>
                            <div>
                            <RawMaterialsDrawer data={res}/>
                            </div>
                            </div>
                                    
                            </td>
                        </tr>
                    ))}
            </tbody>
          </table>
        </div>
      </Card>
    );
}
