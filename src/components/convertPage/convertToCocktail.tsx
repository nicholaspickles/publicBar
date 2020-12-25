import React, { useState } from "react";
import { Form, InputNumber, Select, Button } from "antd";
import { GeneralWrapper } from "../../styles";
import { DrinkData } from "../../shared/products";

const ConvertCocktailForm = () => {
  const [ttlVol, setTtlVol] = useState();
  const [indieVols, setIndieVols] = useState([]);
  const [order, setOrder] = useState({
    spirit: "",
    cocktail: [],
  });
  const [form] = Form.useForm();

  const cocktailList = (spirit) => {
    const cocktailList = DrinkData.filter((x) => x.spiritType === spirit);
    return cocktailList;
  };

  const handleChange = (type, e) => {
    setOrder((prevState) => ({ ...prevState, [type]: e }));
  };
  const handleChangeVolumes = (drink, e) => {
    setIndieVols((prevState) => ({
      ...prevState,
      [drink]: e,
    }));
  };

  const handleTotalVol = (e) => {
    setTtlVol(e);
  };

  const onFinish = () => {
    alert(JSON.stringify(order));
    alert(JSON.stringify(indieVols));
  };
  const onFinishFailed = () => {
    console.log(order);
  };

  return (
    <GeneralWrapper style={{ marginTop: "2%" }}>
      <p style={{ marginBottom: "3%", color: "#BFBFBF", fontSize: "12px" }}>
        This is the option for when you want to change your bottle into a
        cocktail that is listed in out menu, which you can view{" "}
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
            onChange={(e) => handleChange("spirit", e)}
          >
            <Select.Option value="gin">Gin</Select.Option>
            <Select.Option value="vodka">Vodka</Select.Option>
            <Select.Option value="whisky">Whisky</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Volume to convert (ml)">
          <InputNumber onChange={(e) => handleTotalVol} />
        </Form.Item>
        <Form.Item label="Cocktail">
          <Select
            mode="multiple"
            placeholder="Select cocktail"
            onChange={(e) => handleChange("cocktail", e)}
          >
            {cocktailList(order.spirit).map((x) => (
              <Select.Option value={x.name}>{x.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        {order.cocktail.map((selected) => (
          <Form.Item label={selected}>
            <InputNumber
              key={selected}
              name={selected}
              style={{ width: "50%" }}
              formatter={(value) => `${value}ml`}
              parser={(value) => value.replace("ml", "")}
              onChange={(e) => handleChangeVolumes(selected, e)}
            />
          </Form.Item>
        ))}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </GeneralWrapper>
  );
};

export default ConvertCocktailForm;
