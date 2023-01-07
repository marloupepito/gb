import React,{useState} from 'react';
import { Layout, Menu, theme,Button } from 'antd';
import Menus from './components/Menu';
import { LogoutOutlined } from '@ant-design/icons';
import {Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
import LogoutSession from '../auth/Logout'
const AdminLayoutPage = () => {
  const [logout,setLogout] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function LogoutUser(){
    
    logout === true?setLogout(false):setLogout(true)
  }
  return (
    <Layout hasSider>
      {
        logout === true?<LogoutSession show={logout}/>:false
      }
      <Sider
      className='border border-right'
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        background: colorBgContainer,
      }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
         // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
        //  console.log(collapsed, type);
        }}
      >
       <div style={{ height: 32, margin: 16, background: 'red' }} />
        
        <Menus />
        <Button type="primary" danger onClick={LogoutUser}  className="position-absolute bottom-0 end-0" icon={<LogoutOutlined />} block size="large">
            Logout
          </Button>
        
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}>
        <Header
        className='border-bottom'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        ><div style={{marginLeft:'10px'}}>
            <b className="text-danger">GB</b> <b>BAKESHOP</b>
            </div></Header>
        <Content
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminLayoutPage;