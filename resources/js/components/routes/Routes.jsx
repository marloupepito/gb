import React, { Component } from 'react';
import Auth from '../auth/Auth';
import { createBrowserRouter } from "react-router-dom";
import Error404 from '../components/Error404';
import AdministratorPage from '../administrator/Page';
import DeliveryPage from '../administrator/branches/delivery/Page';
import RequestSection from '../administrator/branches/delivery/section/Request';
import DeliverySection from '../administrator/branches/delivery/section/Delivery';
import ReceivedSection from '../administrator/branches/delivery/section/Received';
import AppLoading from '../administrator/components/Loading';

import EmployeesPage from '../administrator/branches/employees/Page';
import IngredientsPage from '../administrator/branches/ingredients/Page';

import ProductionPage from '../administrator/branches/production/Page';

import CreateSection from '../administrator/branches/production/section/CreateSection';
import ProductionRecords from '../administrator/branches/production/section/ProductionRecords';
import ProductionSectionDrawer from '../administrator/branches/production/section/components/Drawer';
import BreadListSection from '../administrator/branches/production/section/BreadListSection';
import BreadReportSection from '../administrator/branches/production/section/BreadReport'; //
import BreadOutSection from '../administrator/branches/production/section/BreadOutSection';
import BreadSoldSection from '../administrator/branches/production/section/BreadSoldSection';


import DashboardPage from '../administrator/dashboard/Page'
import DashboardSection from '../administrator/dashboard/section/Dashboard'
import DashboardCharts from '../administrator/dashboard/section/Charts'

import BranchPageBranch from '../branch/Page'
import DeliveryPageBranch from '../branch/delivery/Page';
import RequestSectionBranch from '../branch/delivery/section/Request';
import DeliverySectionBranch from '../branch/delivery/section/Delivery';
import ReceivedSectionBranch from '../branch/delivery/section/Received';
import AppLoadingBranch from '../branch/components/Loading';
import EmployeesPageBranch from '../branch/employees/Page';
import IngredientsPageBranch from '../branch/ingredients/Page';
import ProductionPageBranch from '../branch/production/Page';
import CreateSectionBranch from '../branch/production/section/CreateSection';
import ProductionSectionDrawerBranch from '../branch/production/section/components/Drawer';
import ProductionRecordsBranch from '../branch/production/section/ProductionRecords';
import BreadListSectionBranch from '../branch/production/section/BreadListSection';
import BreadOutSectionBranch from '../branch/production/section/BreadOutSection';
import BreadSoldSectionBranch from '../branch/production/section/BreadSoldSection';
//import DashboardPageBranch from '../branch/dashboard/Page'



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
  { path:'*',element:<Error404 /> },
  { path:'/administrator',element:<AdministratorPage />,
    children:[
      { path:'/administrator/dashboard', element:<DashboardPage />,
        children:[
          { path:'/administrator/dashboard', element:<DashboardSection />},
          { path:'/administrator/dashboard/charts/:id', element:<DashboardCharts />},
        ]
      },
      { path:'/administrator/:id/ingredients', element:<IngredientsPage />},
      { path:'/administrator/:id/delivery', element:<DeliveryPage />,
        children:[
          {path:'/administrator/:id/delivery/request', element: <RequestSection />},
          {path:'/administrator/:id/delivery/delivered', element: <DeliverySection />},
          {path:'/administrator/:id/delivery/received', element: <ReceivedSection />},
        ]
      },
      { path:'/administrator/:id/production', element:<ProductionPage />,
      children:[
        {path:'/administrator/:id/production/create', element: <CreateSection />},
        {path:'/administrator/:id/production/records', element: <ProductionRecords />},
        {path:'/administrator/:id/production/create/form', element: <ProductionSectionDrawer />},
        {path:'/administrator/:id/production/list', element: <BreadListSection />},
        {path:'/administrator/:id/production/bread', element: <BreadReportSection />},//
        {path:'/administrator/:id/production/sold', element: <BreadSoldSection />},
        {path:'/administrator/:id/production/out', element: <BreadOutSection />},
      ]},
      { path:'/administrator/:id/accounts', element:<EmployeesPage />},
      { path:'/administrator/:id/loading', element:<AppLoading />}
    ]
  },


  { path:'/branch',element:<BranchPageBranch />,
  children:[
    { path:'/branch/:id/ingredients', element:<IngredientsPageBranch />},
    { path:'/branch/:id/delivery', element:<DeliveryPageBranch />,
      children:[
        {path:'/branch/:id/delivery/request', element: <RequestSectionBranch />},
        {path:'/branch/:id/delivery/delivered', element: <DeliverySectionBranch />},
        {path:'/branch/:id/delivery/received', element: <ReceivedSectionBranch />},
      ]
    },
    { path:'/branch/:id/production', element:<ProductionPageBranch />,
    children:[
      {path:'/branch/:id/production/create', element: <CreateSectionBranch />},
      {path:'/branch/:id/production/records', element: <ProductionRecordsBranch />},
      {path:'/branch/:id/production/create/form', element: <ProductionSectionDrawerBranch />},
      {path:'/branch/:id/production/list', element: <BreadListSectionBranch />},
      {path:'/branch/:id/production/sold', element: <BreadSoldSectionBranch />},
      {path:'/branch/:id/production/out', element: <BreadOutSectionBranch />},
    ]},
     {path:'/branch/:id/accounts', element:<EmployeesPageBranch />},
   // { path:'/branch/:id/employees', element:<EmployeesPageBranch />},
    { path:'/branch/:id/loading', element:<AppLoadingBranch />}
  ]
},
 
]);
