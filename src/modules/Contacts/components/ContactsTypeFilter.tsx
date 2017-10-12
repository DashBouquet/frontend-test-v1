import * as React from 'react';
import * as style from '../styles/contactsTypeFilter.css';
import { Layout, Button, Radio } from 'antd';
const { Content } = Layout;

export const ContactsTypeFilter: any = (props: any) => {
  return (
    <Layout className={style.container}>
      <Content className={style.content}>
        <Radio.Group value={props.selectedType} onChange={props.handleSelect}>
          {props.types.map((type, index) => (
            <Radio.Button className={style.button} key={index} value={type}>{type}</Radio.Button>
          ))}
        </Radio.Group>
      </Content>
    </Layout>
  );
};