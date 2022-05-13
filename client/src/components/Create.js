import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

import { Layout, Form, Input, Button, Menu, Image } from "antd";

import { HomeFilled } from '@ant-design/icons';

import picture from '../open-book.png';

const { Header, Content, Footer } = Layout;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };



const Create = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const formRef = useRef(null);

    const onFinish = async (values) => {
        // This will send a post request to update the data in the database.
        await fetch(`http://localhost:8000/create`, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          },
        });
        navigate("/");
        console.log(values);
    };

    return (
        <Layout style={{minHeight:"100vh"}}>
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
                        <NavLink to="/">
                            <Button icon={<HomeFilled />}>
                                Return to list
                            </Button>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content
                className="site-layout"
                style={{
                  padding: '0 50px',
                  marginTop: 64,
                }}
            >
                <div
                    className="site-layout-background"
                    style={{
                    padding: 24,
                    minHeight:"70vh"
                    }}
                >
                    <Form form={form} {...layout} onFinish={onFinish} ref={formRef}>
                        <Form.Item name="author" label="Author" rules={[{required:true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="title" label="Title" rules={[{required:true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="thoughts" label="Thoughts" rules={[{required:true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                My Book Reviews 2022 Created by :)
            </Footer>
        </Layout>
    );
};

export default Create;
