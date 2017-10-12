import * as React from 'react';
import {Layout, Menu, Icon} from 'antd';
const { Sider } = Layout;
import { compose, withHandlers, withState } from 'recompose';

import * as style from './style.css';

const SideBar = ({onToggleClick, collapsed}) => (
  <Sider
    trigger={null}
    collapsible
    collapsed={collapsed}
    style={{background: '#d8d8d8', }}
  >
    <Icon
      className={style.trigger}
      type={collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={() => onToggleClick(!collapsed)}
    />
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      style={{background: 'inherit'}}
    >
      <Menu.Item key="1">
        <Icon
          type="star"
          className={style.star}/>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon
          type="star"
          className={style.star}/>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon
          type="star"
          className={style.star}/>
      </Menu.Item>
      <Menu.Item key="4">
        <Icon
          type="star"
          className={style.star}/>
      </Menu.Item>
      <Menu.Item key="5">
        <Icon
          type="star"
          className={style.star}/>
      </Menu.Item>
      <Menu.Item key="6">
        <Icon
          type="star"
          className={style.star}/>
      </Menu.Item>
    </Menu>
  </Sider>
);

export default compose(
    withState('collapsed', 'onToggleClick', true),
)(SideBar);