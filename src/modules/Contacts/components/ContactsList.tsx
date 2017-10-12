import * as React from 'react';
import * as style from '../styles/contactsList.css';
import { Layout, Table } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content } = Layout;
const { Column } = Table;

export const ContactsList: any = (props: any) => {
  return (
    <Layout className={style.container}>
      {console.log(props)}
      <Header className={style.header}>
        Contact List
      </Header>
      <Content>
        {
          props.contacts &&
          <Table className={style.table} dataSource={props.contacts.data}>
            <Column
              dataIndex="contactName"
              key="contactName"
            />
            <Column
              dataIndex="address.line1"
              key="address.line1"
            />
            <Column
              dataIndex="phone"
              key="phone"
            />
            <Column
              key="action"
              render={({id}) => (
                <span>
                <Link to="#">Activate</Link>
                <span className="ant-divider" />
                <Link to={`/contact/${id}`}>View</Link>
                <span className="ant-divider" />
                <Link to="#">Delete</Link>
                </span>
              )}
            />
          </Table>
        }
      </Content>
    </Layout>
  );
};