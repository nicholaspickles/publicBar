import React, { useState } from "react";

import { Form, Input, Card, Select, Button, Modal } from "antd";
import { GeneralWrapper, GeneralHeader, GeneralBody } from "../styles";

const { TextArea } = Input;

const Contact = () => {
  const modal = () => {
    Modal.success({ content: "Your query has been sent!" });
  };

  const [form] = Form.useForm();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    queryType: "",
    details: "",
  });

  const handleChange = (type, e) => {
    setQuery((prevState) => ({
      ...prevState,
      [type]: e,
    }));
  };

  const onFinish = (values) => {
    modal();
  };
  const onFinishFailed = () => {
    alert("not complete");
  };

  return (
    <GeneralWrapper>
      <GeneralHeader>Got any questions or ideas? </GeneralHeader>
      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      <p style={{ marginBottom: "2%", marginTop: "2%", textAlign: "center" }}>
        Let us know in the form below or drop us an email at barkeep@gmail.com!
      </p>
      <Card
        title="Contact Form"
        hoverable
        bordered={true}
        style={{
          width: "50%",
          textAlign: "center",
          marginLeft: "25%",
          borderColor: "grey",
          borderRadius: "20px",
          marginBottom: "5%",
        }}
      >
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
          layout="horizontal"
          style={{ borderColor: "5px solid black" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          form={form}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input
              placeholder="Enter your name"
              onChange={(e) => handleChange("name", e)}
              style={{ borderRadius: "10px" }}
            />
          </Form.Item>
          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter an email",
              },
            ]}
          >
            <Input
              placeholder="Enter your email"
              onChange={(e) => handleChange("email", e)}
              style={{ borderRadius: "10px" }}
            />
          </Form.Item>
          <Form.Item label="Query type" name="queryType">
            <Select
              style={{ borderRadius: "10px" }}
              onChange={(e) => handleChange("queryType", e)}
            >
              <Select.Option value="ideas">New Ideas</Select.Option>
              <Select.Option value="questions">Questions</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Details"
            name="details"
            rules={[
              {
                required: true,
                message:
                  "Please enter the details of why you want to contact us",
              },
            ]}
          >
            <TextArea
              rows={4}
              style={{ borderRadius: "10px" }}
              onChange={(e) => handleChange("details", e)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </GeneralWrapper>
  );
};

export default Contact;
