import React from "react";
import '../index.css';
import { Layout, Menu } from 'antd';
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import Create from "./Create";

const { Header, Content, Footer } = Layout;
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
                <Menu.Item label={"Create"}>
                    <NavLink to="/Create">
                        Create entry
                    </NavLink>
                </Menu.Item>
            </Menu>
    </Header>
    );
};

export default NavBar;