import React from "react";
import { NavLink } from "react-router-dom";

import '../index.css';

import { Layout, Menu } from 'antd';

const { Header} = Layout;

const NavBar = () => {
    return (
        <Header
        style={{
        zIndex: 1,
        width: '100%',
        }}
        >
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}>
                <Menu.Item label={"Create"} key="create">
                    <NavLink to="/Create">
                        Create entry
                    </NavLink>
                </Menu.Item>
            </Menu>
    </Header>
    );
};

export default NavBar;