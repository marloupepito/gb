import React, { Component } from 'react';
import Auth from '../auth/Auth';
import { createBrowserRouter } from "react-router-dom";
import Error404 from '../components/Error404';
import AdministratorPage from '../administrator/Page';
import DeliveryPage from '../administrator/branches/delivery/Page';
import DeliveryTable from '../administrator/branches/delivery/components/Table';


import EmployeesPage from '../administrator/branches/employees/Page';
import IngredientsPage from '../administrator/branches/ingredients/Page';

import ProductionPage from '../administrator/branches/production/Page';

import CreateSection from '../administrator/branches/production/section/CreateSection';
import ProductionSectionDrawer from '../administrator/branches/production/section/components/Drawer';
import BreadListSection from '../administrator/branches/production/section/BreadListSection';
import BreadOutSection from '../administrator/branches/production/section/BreadOutSection';
import BreadSoldSection from '../administrator/branches/production/section/BreadSoldSection';
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
      { path:'/administrator/:id/ingredients', element:<IngredientsPage />},
      { path:'/administrator/:id/delivery', element:<DeliveryPage />,
        children:[
          {path:'/administrator/:id/delivery/request', element: <DeliveryTable />},
          {path:'/administrator/:id/delivery/delivered', element: <DeliveryTable />},
          {path:'/administrator/:id/delivery/received', element: <DeliveryTable />},
        ]
      },
      { path:'/administrator/:id/production', element:<ProductionPage />,
      children:[
        {path:'/administrator/:id/production/create', element: <CreateSection />},
        {path:'/administrator/:id/production/create/form', element: <ProductionSectionDrawer />},
        {path:'/administrator/:id/production/list', element: <BreadListSection />},
        {path:'/administrator/:id/production/sold', element: <BreadSoldSection />},
        {path:'/administrator/:id/production/out', element: <BreadOutSection />},
      ]},
      { path:'/administrator/:id/employees', element:<EmployeesPage />}
    ]
  },
]);
