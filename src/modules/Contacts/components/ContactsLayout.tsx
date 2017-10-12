import * as React from 'react';
import * as style from '../styles/contactsLayout.css';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content } = Layout;
import ContactsList from '../containers/ContactsList';
import ContactsAlphabeticSorter from '../containers/ContactsAlphabeticSorter';
import ContactsTypeFilter from '../containers/ContactsTypeFilter';

export const ContactsLayout: any = (props: any) => {
  return (
    <Layout className={style.container}>
      <Header className={style.header}>
        Contact List
      </Header>
      <Content>
        <ContactsAlphabeticSorter />
        <ContactsTypeFilter />
        <ContactsList />
      </Content>
    </Layout>
  );
};