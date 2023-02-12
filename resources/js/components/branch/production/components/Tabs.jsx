import React from 'react';
import { PullRequestOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import {Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function ProductionTabs() {
    const navigate = useNavigate();
    const tabs = window.location.pathname.split('/')[4]
    function nextTab(e){
        const branch = window.location.pathname.split('/')[2]
        const id = window.location.search.substring(1)
        navigate('/branch/'+branch+'/production/'+e+'?'+id)
      }
    return ( 
        <Tabs
        onChange={nextTab}
        size="large"
        defaultActiveKey={tabs}
        items={[
            {
                label: (
                <span>
                  <PullRequestOutlined />
                  Production Beginning
                </span>
              ),
              key: 'create',
              children: <Outlet />,
            },
              {
              label: (
              <span>
                <PullRequestOutlined />
                 Bread List
              </span>
            ),
            key: 'list',
            children: <Outlet />,
          },
            {
              label: (
              <span>
                <PullRequestOutlined />
                Records
              </span>
            ),
            key: 'records',
            children: <Outlet />,
          },
 
          
      //     {
      //       label: (
      //       <span>
      //         <PullRequestOutlined />
      //          Bread Sold
      //       </span>
      //     ),
      //     key: 'sold',
      //     children: <Outlet />,
      //   },
      //   {
      //     label: (
      //     <span>
      //       <PullRequestOutlined />
      //        Bread Out
      //     </span>
      //   ),
      //   key: 'out',
      //   children: <Outlet />,
      // },
        ]}
      />
     );
}

export default ProductionTabs;