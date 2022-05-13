import React from "react";
import { NavLink } from "react-router-dom";


import '../index.css';
import picture from '../open-book.png';

import { Layout, Menu, Button, Image } from 'antd';

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
                <Image
                    width={50}
                    src={picture}
                    preview={false}
                    />
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