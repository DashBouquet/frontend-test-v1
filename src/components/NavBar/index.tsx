import * as React from 'react';
import { Layout, Icon } from 'antd';
import { Link } from 'react-router-dom';
import * as style from './style.css';

const { Header } = Layout;

const NavBar = () => (
  <Header className={style.header}>
    <nav>
      <ul className={style.nav}>
        <li key="1" className={style.nav__link}>Bookings</li>
        <li key="2" className={style.nav__link}>Allocation</li>
        <li key="3" className={style.nav__link}>Reporting</li>
        <li key="4" className={style.nav__link}>
          <Link to="/contacts" className={style.nav__link}>Contacts</Link>
        </li>
        <li key="5" className={style.nav__link}>Settings</li>
        <li key="6" className={style.nav__link}>Finances</li>
      </ul>
    </nav>
    <div className={style.icons}>
      <span className={style.icons__span}>
        <Icon className={style.icons__icon} type="retweet"/>
        <Icon className={style.icons__icon} type="mail"/>
        <Icon className={style.icons__icon} type="setting"/>
      </span>
      <span className={style.icons__span}>
        <span className={style.icons__circle} />
        <p className={style.icons__user}>Robert</p>
      </span>
    </div>
  </Header>
);

export default NavBar;
