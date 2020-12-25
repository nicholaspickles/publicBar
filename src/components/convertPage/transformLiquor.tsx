import React, { useState } from "react";

import { Button, Form, Select } from "antd";

import { GeneralWrapper } from "../../styles";

const TransformLiquorForm = () => {
  const [form] = Form.useForm();
  const [order, setOrder] = useState({
    spiritType: "",
    infusers: [],
  });

  const onFinish = () => {
    alert(JSON.stringify(order));
  };
  const onFinishFailed = () => {
    alert(JSON.stringify(order));
  };

  const handleChange = (type, e) => {
    setOrder((prevState) => ({
      ...prevState,
      [type]: e,
    }));
  };

  return (
    <GeneralWrapper style={{ marginTop: "2%" }}>
      <p style={{ marginBottom: "3%", color: "#BFBFBF", fontSize: "12px" }}>
        This is the option for when you want to change your bottle into a a
        flavored spirit (eg: Chrysanthemum gin, pandan vodka) for you to make
        into cocktails later. A list of these options can also be found{" "}
        <a href="/products">here.</a>
      </p>
      <Form
        layout="horizontal"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item label="Spirit Type">
          <Select
            placeholder="Select spirit type"
            onChange={(e) => handleChange("spiritType", e)}
          >
            <Select.Option value="gin">Gin</Select.Option>
            <Select.Option value="vodka">Vodka</Select.Option>
            <Select.Option value="whisky">Whisky</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Infusers"
          extra="Selecting multiple will result in 3 different infusions, not 1 infusion with 3 ingredients."
        >
          <Select
            placeholder="Select what you want to infuse with"
            mode="multiple"
            onChange={(e) => handleChange("infusers", e)}
          >
            <Select.Option value="pandan">Pandan</Select.Option>
            <Select.Option value="chrysanthemum">Chrysanthemum</Select.Option>
            <Select.Option value="sourPlum">Sour Plum</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </GeneralWrapper>
  );
};

export default TransformLiquorForm;
