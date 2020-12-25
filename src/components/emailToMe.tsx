import React, { useState } from "react";
import { GeneralHeader, GeneralWrapper, GeneralBody } from "../styles";
import { Card, Input, Form, Button, Select } from "antd";

//REDUX
import { ApplicationState } from "../redux/store";
import { useSelector } from "react-redux";
import {} from "../redux/ducks/cart";

const { TextArea } = Input;
const { Option } = Select;

const EmailToMe = () => {
  const [contactInfo, setContactInfo] = useState({
    nameID: "",
    number: "",
    paymentMethod: "",
    deliveryMethod: "",
  });
  const orders = useSelector(
    (state: ApplicationState) => state.cart.itemsInCart
  );
  const [form] = Form.useForm();

  const handleChange = (detail, e) => {
    setContactInfo((prevState) => ({
      ...prevState,
      [detail]: e,
    }));
  };

  // const handleInputChange = (e) => {
  //   setContactInfo((prevState)=>({
  //     const { name, value} = e.target;
  //       }))
  // }

  const onFinish = () => {
    console.log(contactInfo);
  };

  const onFinishFailed = () => {
    console.log("error");
  };

  return (
    <GeneralWrapper>
      <GeneralHeader>Checkout</GeneralHeader>
      <GeneralBody>
        Thanks for ordering! I do not have the payment set up so please send
        this email to me at barkeep@protonmail.com and I will get back to you
        once your order has been recieved.
      </GeneralBody>
      <GeneralHeader>Just a few more things!</GeneralHeader>
      <Form
        name="finalReview"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{
          marginLeft: "10vw",
        }}
        form={form}
        scrollToFirstError
      >
        <Form.Item
          label="Name"
          rules={[{ required: true, message: "Please enter your name" }]}
          hasFeedback
        >
          <Input
            name="nameID"
            allowClear
            placeholder="Enter your name"
            // onChange={handleInputChange}
            style={{ width: "80%" }}
          />
        </Form.Item>
        <Form.Item label="Contact Number">
          <Input
            name="number"
            placeholder="Enter your number"
            onChange={(e) => handleChange("number", e)}
            style={{ width: "50%" }}
          />
        </Form.Item>
        <Form.Item label="Payment Method" rules={[{ required: true }]}>
          <Select
            style={{ width: "80%" }}
            placeholder="Select payment method"
            onChange={(e) => handleChange("paymentMethod", e)}
          >
            <Select.Option value="paylah">Paylah!</Select.Option>
            <Select.Option value="paynow">PayNow</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Delivery Method" rules={[{ required: true }]}>
          <Select
            style={{ width: "80%" }}
            placeholder="Select delivery method"
            onChange={(e) => handleChange("deliveryMethod", e)}
          >
            <Select.Option value="pickup">Pickup</Select.Option>
            <Select.Option value="delivery">Delivery</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Continue
          </Button>
        </Form.Item>
      </Form>
      {/* <Card
        style={{
          marginBottom: "15px",
          marginLeft: "2vw",
          marginRight: "2vw",
          boxShadow: "2px 5px #E5E5E5",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <TextArea />
        </div>
      </Card> */}
    </GeneralWrapper>
  );
};

export default EmailToMe;
