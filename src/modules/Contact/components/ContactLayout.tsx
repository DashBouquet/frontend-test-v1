import * as React from 'react';
import * as style from '../styles/contactLayout.css';
import { Layout } from 'antd';
import ContactCard from '../containers/ContactCard';
const { Header, Content } = Layout;

export const ContactLayout: any = (props: any) => {
  return (
    <Layout className={style.container}>
      <Header className={style.header}>
        Contact Details
      </Header>
      <Content>
        <ContactCard />
      </Content>
    </Layout>
  );
};