import React,{useState} from 'react';
import { Layout, Menu, theme } from 'antd';
import Menus from './components/Menu';
import {Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const AdminLayoutPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
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
            GB BAKESHOPE
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