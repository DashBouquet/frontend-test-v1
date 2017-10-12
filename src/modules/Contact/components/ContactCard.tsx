import * as React from 'react';
import * as style from '../styles/contactCard.css';
import { Layout, Table } from 'antd';
const { Header, Content } = Layout;

export const ContactCard: any = (props: any) => {
  return (
    <Layout className={style.container}>
      <Header className={style.header}>
        Contact Details
      </Header>
      <Content>

      </Content>
    </Layout>
  );
};