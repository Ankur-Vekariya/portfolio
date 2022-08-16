import "./contact.css";
import React from "react";
import Navbar from "../Navbar";
import { Button, Checkbox, Form, Input } from "antd";

const { TextArea } = Input;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Navbar />
      <div className="page">
        <div className="card-first">
          <div className="container">
            <div className="content">
              <div className="text">
                <h1>CONTACT US</h1>
                <h2>
                  Get what you want! <br />
                </h2>
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item name="query" label="TextArea">
                    <TextArea rows={4} />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button className="submit" type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
          <div className="second-container">
            <img src="/Contactus.svg" alt="image" />
          </div>
        </div>
      </div>
      <a href="https://storyset.com/work">Work illustrations by Storyset</a>
    </div>
  );
};

export default Contact;
