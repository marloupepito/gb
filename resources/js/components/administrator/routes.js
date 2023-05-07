import React from "react";
import { GetAllBranches } from "../api/branch";
// Admin Imports
import MainDashboard from "./views/admin/default";
// import NFTMarketplace from "views/admin/marketplace";
// import Profile from "views/admin/profile";
// import DataTables from "views/admin/tables";
// import RTLDefault from "views/rtl/default";

// // Auth Imports
// import SignIn from "views/auth/SignIn";

// // Icon Imports
import {
  MdHome,
  // MdOutlineShoppingCart,
  // MdBarChart,
  // MdPerson,
  // MdLock,
} from "react-icons/md";
const branches = GetAllBranches();
branches.then(res=> {
  localStorage.setItem('children', JSON.stringify(res));
})
const children = JSON.parse(localStorage.getItem('children'))
const routes = [
  {
    name: "Main Dashboard",
    layout: "/administrator",
    path: "dashboards",
    // icon: <MdHome className="h-6 w-6" />,
    // component: <MainDashboard />,
  },
  ...children.map(res =>({
    name: res.branch_name,
    key:res.id+Math.random(),
    layout: "/administrator",
    path: "/branch/"+res.id,
    children:[
      // {
      //   key:res.id+Math.random(),
      //   name: "Dashboard", 
      //   layout: "/administrator",
      //   path: "/branch/"+res.id+'/dashboard',
      // },
      // {
      //   key:res.id+Math.random(),
      //   name: "Delivery",
      //   layout: "/administrator",
      //   path: "/branch/"+res.id+'/delivery', 
      
      // },
      {
        key:res.id+Math.random(),
        name: "Raw Materials", 
        layout: "/administrator",
        path: "/branch/"+res.id+'/ingredients', 
      },
      {
        key:res.id+Math.random(),
        name: "Bread Production",
        layout: "/administrator",
        path: "/branch/"+res.id+'/production', 
        
      },
      {
        key:res.id+Math.random(),
        name: "Accounts", 
        layout: "/administrator",
        path: "/branch/"+res.id+'/accounts', 
      }
    ]
  }))
  ,
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  //  },
];
export default routes;
