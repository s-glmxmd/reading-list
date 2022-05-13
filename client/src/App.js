import React from 'react';
import './index.css';

import { Layout } from 'antd';

import NavBar from './components/NavBar';
import BookList from './components/BookList';

const {  Content, Footer } = Layout;

const App = () => {

  return(
  <Layout style={{minHeight:"100vh"}}>
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
        <BookList/>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      My Book Reviews 2022 Created by :)
    </Footer>
  </Layout>
  );
};

export default App;