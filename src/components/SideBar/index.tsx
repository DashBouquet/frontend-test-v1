import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { compose, withHandlers, withState } from 'recompose';
import * as style from './style.css';

const { Sider } = Layout;
const { Item } = Menu;

const SideBar: any = ({ onToggle, collapsed }) => (
  <Sider
    trigger={null}
    collapsible
    collapsed={collapsed}
    style={{ background: '#d8d8d8' }}
  >
    <Icon
      className={style.trigger}
      type={collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={onToggle}
    />
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      style={{ background: 'inherit' }}
    >
      <Item key="1">
        <Icon type="star" className={style.star} />
      </Item>
      <Item key="2">
        <Icon type="star" className={style.star} />
      </Item>
      <Item key="3">
        <Icon type="star" className={style.star} />
      </Item>
      <Item key="4">
        <Icon type="star" className={style.star} />
      </Item>
      <Item key="5">
        <Icon type="star" className={style.star} />
      </Item>
      <Item key="6">
        <Icon type="star" className={style.star} />
      </Item>
    </Menu>
  </Sider>
);

export default compose(
  withState('collapsed', 'onCollapsed', true),
  withHandlers({
    onToggle: ({ onCollapsed }) => () => onCollapsed(state => !state),
  })
)(SideBar);