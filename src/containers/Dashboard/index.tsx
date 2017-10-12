import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import { Link } from 'react-router-dom';
import * as style from './style.css';

export default class Dashboard extends React.Component {
    state = {
        collapsed: true,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <Layout style={{ height: '100vh'}}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="user" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="user" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className={style.header}>
                        <nav>
                            <ul className={style.nav}>
                                <Icon
                                    className={`${style.trigger} ${style.nav__link}`}
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                                <li key="1" className={style.nav__link}>Bookings</li>
                                <li key="2" className={style.nav__link}>Allocation</li>
                                <li key="3" className={style.nav__link}>Reporting</li>
                                <Link to="/" className={style.nav__link}>Contacts</Link>
                                <li key="5" className={style.nav__link}>Settings</li>
                                <li key="6" className={style.nav__link}>Finansces</li>
                            </ul>
                        </nav>
                        <div className={style.icons}>
                            <span className={style.icons__span}>
                                <Icon className={style.icons__icon} type="retweet" />
                                <Icon className={style.icons__icon} type="mail" />
                                <Icon className={style.icons__icon} type="setting" />
                            </span>
                            <span className={style.icons__span}>
                                <span className={style.icons__circle}></span>
                                <p className={style.icons__user}>Robert</p>
                            </span>
                        </div>
                    </Header>
                    <Content className={style.content}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
