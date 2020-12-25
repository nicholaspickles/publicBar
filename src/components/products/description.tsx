import React, { useState } from "react";
import { Card, message } from "antd";

import { AddToCartButton, InputNumberProducts } from "../../styles";
import { createEntry } from "../../shared/helperFunctions";
import { DrinkData } from "../../shared/products";

//REDUX
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/ducks/cart";

const DescriptionCard = ({ product }) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleQuantChange = (e) => {
    setItemQuantity(e);
  };

  const handleAddToCart = (drinkId) => {
    const drink = DrinkData[drinkId];
    const { _id, name, image, price } = drink;
    const order = createEntry({
      id: _id,
      quantity: 1,
      image: image,
      name: name,
      price: price,
    });
    for (var i = 0; i < itemQuantity; i++) {
      dispatch(addCartItems(order));
    }
    message.success({
      content: `${itemQuantity} x ${order.name} has been added to your bag.`,
      duration: 0.8,
      style: {
        marginTop: "40px",
      },
    });
    setItemQuantity(1);
  };

  const cardTitle = () => {
    return (
      <div style={{ fontFamily: "moonlight" }}>
        <p style={{ margin: 0, padding: 0 }}>{product.name}</p>
        <p>${product.price}</p>
      </div>
    );
  };
  return (
    <>
      <Card
        size="default"
        title={cardTitle()}
        bordered={false}
        style={{ marginLeft: "15%", marginRight: "25%" }}
        headStyle={{
          borderBottomColor: "#707070",
          borderBottomWidth: "2px",
          margin: "0",
          padding: "0",
        }}
      >
        <p
          style={{
            fontFamily: "moonlight",
            fontSize: "12px",
            margin: "0",
            padding: "0",
          }}
        >
          Quantity
        </p>
        <div style={{ margin: "0", padding: "0" }}>
          <InputNumberProducts
            defaultValue={1}
            value={itemQuantity}
            onChange={(e) => handleQuantChange(e)}
          />
          <br />
          <AddToCartButton
            type="primary"
            block
            onClick={() => handleAddToCart(product._id)}
          >
            Add To Cart
          </AddToCartButton>
          <br />
          <div style={{ marginTop: "4%", fontSize: "10px" }}>
            {product.description}
          </div>
        </div>
      </Card>
    </>
  );
};

export default DescriptionCard;
