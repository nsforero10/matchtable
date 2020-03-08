import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {Layout, Menu, Table} from 'antd';

function App() {
  return (
    
    <div className='main'>
    <Layout class = 'layout'>
      <Layout.Header>
      <h1 style={{color:"white"}}>Partidos</h1>
        <Menu
        theme="dark"
        mode = "horizontal"
        defaultSelectedKey = {[2]}
        style = {{lineHeight: '64px'}}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content>
        <Table>
          
        </Table>
        <div className="site-layout-content">Content</div>
      </Layout.Content>
      <Layout.Footer>
        <span> Made with love by Nicolas Forero</span>
        <span> MIT License</span>
      </Layout.Footer>
    </Layout>
    </div>
  )
}

export default App;
