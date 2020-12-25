import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Badge, Button, Drawer, Tooltip } from "antd";
import CartContent from "./cartMagic";

import { ApplicationState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setCartVisibility } from "../../redux/ducks/cart";

import {
  ShoppingCartOutlined,
  RightOutlined,
  RedoOutlined,
} from "@ant-design/icons";

const CartDrawer = () => {
  const [update, forceUpdate] = useState(0);
  const history = useHistory();
  const cart = useSelector((state: ApplicationState) => state.cart.itemsInCart);
  const numInCart = cart.reduce(function (acc, cur) {
    return acc + cur.quantity;
  }, 0);
  const cartTotal = cart.reduce(function (acc, cur) {
    return acc + cur.price;
  }, 0);
  const visibility = useSelector(
    (state: ApplicationState) => state.cart.showDrawer
  );
  const dispatch = useDispatch();
  const showDrawer = () => {
    dispatch(setCartVisibility(true));
  };
  const onClose = () => {
    dispatch(setCartVisibility(false));
  };
  const onCheckout = () => {
    history.push("/checkout");
    dispatch(setCartVisibility(false));
  };

  const handleRefresh = () => {
    forceUpdate(() => update + 1);
  };

  return (
    <>
      <Badge
        count={numInCart}
        style={{
          backgroundColor: "#3E3F5A",
          color: "white",
          boxShadow: "0 0 1px #d9d9d9 inset",
        }}
      >
        <Button type="text" size="small" onClick={showDrawer}>
          <ShoppingCartOutlined style={{ fontSize: "140%", color: "black" }} />
        </Button>
        <Drawer
          title="Your Cart:"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visibility}
          bodyStyle={{ paddingBottom: 80 }}
          width={350}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Tooltip title="refresh cart" color={" #707F9C"}>
                <Button onClick={handleRefresh} style={{ float: "left" }}>
                  <RedoOutlined />
                </Button>
              </Tooltip>
              <span style={{ marginRight: "2vh" }}>
                Cart Total: ${cartTotal}
              </span>
              <br />
              <br />
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Close
              </Button>
              <Button onClick={onCheckout} type="primary">
                Checkout &nbsp; <RightOutlined />
              </Button>
            </div>
          }
        >
          <CartContent />
        </Drawer>
      </Badge>
    </>
  );
};

export default CartDrawer;
