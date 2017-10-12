import * as React from 'react';
import * as style from '../styles/contactsLayout.css';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import ContactsList from '../containers/ContactsList'
const { Header, Content } = Layout;

export const ContactsLayout: any = (props: any) => {
  return (
    <Layout className={style.container}>
      <Header className={style.header}>
        Contact List
      </Header>
      <Content>
        <ContactsList />
      </Content>
    </Layout>
  );
};