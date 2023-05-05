/* eslint-disable */
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "./../../../components/icons/DashIcon";
// chakra imports

export function SidebarLinks(props) {
  // Chakra color mode
  let location = useLocation();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (
        route.layout === "/administrator"
      ) {
        return (
          
            route.children === undefined?
            <Link key={index} to={route.layout + "/" + route.path}>
              <div className="relative mb-3 flex hover:cursor-pointer">
                <li
                  className="my-[3px] flex cursor-pointer items-center px-8"
                  key={index}
                >
                  <span
                    className={`${
                      activeRoute(route.path) === true
                        ? "font-bold text-brand-500 dark:text-white"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {route.icon ? route.icon : <DashIcon />}{" "}
                  </span>
                  <p
                    className={`leading-1 ml-4 flex ${
                      activeRoute(route.path) === true
                        ? "font-bold text-navy-700 dark:text-white"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {route.name}
                  </p>
                </li>
                {activeRoute(route.path) ? (
                  <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
                ) : null}
              </div>
            </Link>:
             <div key={route.key} className="ml-5 mr-5 relative flex">
            <Accordion className='w-full' allowToggle>
              <AccordionItem className='border-b  border-gray-200 ark:!border-white/10'>
                  {/* <Link key={index} to={route.layout + "/" + route.path}> */}
                    <h2>
                      <AccordionButton className='m-1 flex justify-between'>
                        <span className='text-left font-bold text-navy-900 dark:text-white' flex='1'>
                          {route.name}
                        </span>
                        <AccordionIcon className='text-left !text-navy-900 dark:!text-white'/>
                      </AccordionButton>
                    </h2>
                {/* </Link> */}
                <AccordionPanel className='text-left text-medium mt-2 !text-navy-900 dark:!text-white' pb={4}>
                  {route.children.map((res) => (
                   <Link key={res.name}  to={res.layout + res.path}>
                   <div className="relative mb-3 flex hover:cursor-pointer">
                     <li
                       className="my-[3px] flex cursor-pointer items-center px-8"
                       key={index}
                     >
                       <span
                         className={`${
                           activeRoute(res.path) === true
                             ? "font-bold text-brand-500 dark:text-white"
                             : "font-medium text-gray-600"
                         }`}
                       >
                         {res.icon ? route.icon : <DashIcon />}{" "}
                       </span>
                       <p
                         className={`leading-1 ml-4 flex ${
                           activeRoute(res.path) === true
                             ? "font-bold text-navy-700 dark:text-white"
                             : "font-medium text-gray-600"
                         }`}
                       >
                         {res.name}
                       </p>
                     </li>
                     {activeRoute(res.path) ? (
                       <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
                     ) : null}
                   </div>
                 </Link>
                  ))}
                </AccordionPanel>
              </AccordionItem>
              </Accordion>
              </div>
          

        );
      }
    });
  };
  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;
