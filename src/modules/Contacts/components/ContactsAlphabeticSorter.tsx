import * as React from 'react';
import * as style from '../styles/contactsAlphabeticSorter.css';
import { Layout, Button, Radio } from 'antd';
const { Header, Content } = Layout;

export const ContactsAlphabeticSorter: any = (props: any) => {
  return (
    <Layout>
      <Header className={style.header}>
        Find Contacts by A - Z
      </Header>
      <Content className={style.content}>
        <Radio.Group value={props.selectedChar} onChange={props.handleSelect}>
          {props.alphabet.map((char, index) => (
            <Radio.Button key={index} value={char}>{char}</Radio.Button>
          ))}
        </Radio.Group>
      </Content>
    </Layout>
  );
};