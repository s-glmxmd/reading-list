import React from "react";
import { NavLink } from "react-router-dom";


import '../index.css';

import { Layout, Menu, Button} from 'antd';

import { PlusCircleFilled } from '@ant-design/icons';

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
            >
                <Menu.Item label={"Create"} key="create">
                    <NavLink to="/Create">
                        <Button icon={<PlusCircleFilled />}>
                            Create Book Review
                        </Button>
                    </NavLink>
                </Menu.Item>
            </Menu>
    </Header>
    );
};

export default NavBar;