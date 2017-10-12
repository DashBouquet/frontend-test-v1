import * as React from 'react';
import { Layout } from 'antd';
import SideBar from '../../Components/SideBar';
import NavBar from '../../Components/NavBar';
import * as style from './style.css';

const { Content } = Layout;

const Dashboard = ({ children }) => (
  <Layout style={{height: '100vh', flexDirection: 'row'}}>
    <SideBar />
    <Layout>
      <NavBar />
      <Content className={style.content}>
        {children}
      </Content>
    </Layout>
  </Layout>
);

export default Dashboard;
