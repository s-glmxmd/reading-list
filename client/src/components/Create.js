import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { Tag } from "antd";
import { NavLink } from "react-router-dom";
import { Layout, Form, Input, Button, Select } from "antd";
import NavBar from "./NavBar";

const { Content, Footer } = Layout;
const { Option } = Select;

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

    const onAuthorChamge = (value) => {
        form.setFieldsValue({author: value + " is a great author!"});
    }

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
            <NavBar/>
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
                        <Form.Item>
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
