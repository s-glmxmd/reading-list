import React from 'react';

import { useNavigate } from "react-router-dom";
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';

import { Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'antd';

import Create from './components/Create';
import NavBar from './components/NavBar';

const { Header, Content, Footer } = Layout;
const array = [1, 2, 3, 4];



const App = (props) => {

  return(
  <Layout style={{minHeight:"100vh"}}>
    {/* <Header
      style={{
        zIndex: 1,
        width: '100%',
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}>
          
        </Menu>
    </Header> */}
    <NavBar/>
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >

      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight:"70vh"
        }}
      >
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
  );
};

export default App;