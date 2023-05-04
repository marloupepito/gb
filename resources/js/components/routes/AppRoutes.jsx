import React, { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../administrator/Layout";
import AdministratorDashboardLayout from "../administrator/dashboard/Layout";

import MainDashboard from "../administrator/views/admin/default";
// import SignInCentered from "../administrator/views/auth/signIn";
// import Profile from "../administrator/views/admin/profile";
// import DataTables from "../administrator/views/admin/dataTables";
import BranchesLayout from "../administrator/branches/Layout"
import RawMaterialsLayout from "../administrator/branches/raw_materials/Layout";
import BreadProductionLayout from "../administrator/branches/bread_production/Layout";
import BeginningLayout from "../administrator/branches/bread_production/sections/beginning/Layout";
import BakersReportLayout from "../administrator/branches/bread_production/sections/bakers_report/Layout";
import SalesReportLayout from "../administrator/branches/bread_production/sections/sales_report/Layout";
import BreadReportLayout from "../administrator/branches/bread_production/sections/bread_report/Layout";
import AccountsLayout from "../administrator/branches/accounts/Layout";
// import Overview from "../administrator/views/admin/profile";
import AccountSectionLayout from "../administrator/branches/accounts/sections/profile/Layout";
export const router = createBrowserRouter([
    {
    path: "/",
    // children:[
       
    // ]
    },
    {
        path: "/administrator",
        element: <AdminLayout />,
        children:[
            {
                path:'/administrator/dashboards',
                element:<AdministratorDashboardLayout />
            },
            {
                path: "/administrator/branch",
                element: <BranchesLayout />,
                children:[
                  {
                    path: "/administrator/branch/:branchid/dashboard",
                    element: <MainDashboard />,
                  }, 
                  {
                    path: "/administrator/branch/:branchid/delivery",
                    element: <MainDashboard />,
                  },
                  {
                    path: "/administrator/branch/:branchid/ingredients",
                    element: <RawMaterialsLayout />,
                  },  
                  {
                    path: "/administrator/branch/:branchid/production",
                    element: <BreadProductionLayout />,
                    children:[
                      {
                        path: "/administrator/branch/:branchid/production/beginning", 
                        element:<BeginningLayout />
                      },
                      {
                        path: "/administrator/branch/:branchid/production/bakers_report", 
                        element:<BakersReportLayout />
                      },
                      {
                        path: "/administrator/branch/:branchid/production/bread_report", 
                        element:<BreadReportLayout />
                      },
                      {
                        path: "/administrator/branch/:branchid/production/sales_report", 
                        element:<SalesReportLayout />
                      }
                    ]
                  }, 
                  {
                    path: "/administrator/branch/:branchid/accounts",
                    element: <AccountsLayout />,
                    children:[
                      {
                        path: "/administrator/branch/:branchid/accounts/profile/:accountid",
                        element: <AccountSectionLayout />,
                      }
                    ]
                  }, 
                ]
              }, 
        ]
    },
   
  
]);
