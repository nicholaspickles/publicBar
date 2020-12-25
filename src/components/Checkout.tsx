import React, { useState } from "react";

import {
  GeneralWrapper,
  GeneralHeader,
  AddToCart,
  CheckoutImage,
  RemoveButton,
} from "../styles";
import { ShopOutlined } from "@ant-design/icons";

import { Card, Row, Col, Breadcrumb } from "antd";
import { makeNeat } from "../shared/helperFunctions";
import { useHistory } from "react-router-dom";

//REDUX
import { ApplicationState } from "../redux/store";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [update, forceUpdate] = useState(0);
  const history = useHistory();
  const ordered = useSelector(
    (state: ApplicationState) => state.cart.itemsInCart
  );
  const finalArr = makeNeat(ordered);

  const handleRemoveItem = (idi) => {
    var idx = ordered.findIndex((drink) => drink._id === idi);
    ordered.splice(idx, 1);
    forceUpdate(() => update + 1);
  };
  return (
    <>
      <Breadcrumb style={{ marginLeft: "10vh", marginTop: "3%" }}>
        <Breadcrumb.Item onClick={() => history.push("/products")}>
          <ShopOutlined />
        </Breadcrumb.Item>
      </Breadcrumb>
      <GeneralWrapper style={{ marginBottom: "24vh" }}>
        <GeneralHeader style={{ marginTop: "-2vh" }}>
          Review Your Order
        </GeneralHeader>
        <hr
          style={{
            marginRight: "5%",
            marginLeft: "5%",
            marginBottom: "5vh",
            backgroundColor: "#5C5C5C",
            height: "1px",
          }}
        />

        <div style={{ marginLeft: "13vw" }}>
          {ordered.length > 0 ? (
            <div>
              <Card
                style={{
                  textAlign: "center",
                  width: "75vw",
                  boxShadow: "2px 5px #E5E5E5",
                }}
              >
                {finalArr.map((o) => (
                  <Row style={{ marginTop: "2vh" }}>
                    <Col span={7}>
                      <CheckoutImage src={o.image} />
                    </Col>
                    <Col span={5} style={{ marginTop: "2vh" }}>
                      {o.quantity} x {o.name}
                    </Col>
                    <Col span={5} style={{ marginTop: "2vh" }}>
                      ${o.quantity * o.price}
                    </Col>
                    <Col span={3} style={{ marginTop: "2vh" }}>
                      <RemoveButton
                        size={"small"}
                        onClick={() => handleRemoveItem(o.id)}
                      >
                        Remove
                      </RemoveButton>{" "}
                    </Col>
                  </Row>
                ))}
              </Card>
              <br />
              <AddToCart onClick={() => history.push("/checkout/lastpage")}>
                Confirm Order
              </AddToCart>
            </div>
          ) : (
            <Card
              style={{
                textAlign: "center",
                width: "50vw",
                boxShadow: "2px 5px #E5E5E5",
              }}
            >
              <div>
                <h1>Cart is empty :(</h1>
                <br />
                <br />
                <AddToCart onClick={() => history.push("/products")}>
                  Go Shopping
                </AddToCart>
                <br />
                <p style={{ marginTop: "5vh" }}>Orders not showing up?</p>
                <p
                  onClick={() => history.push("/contact")}
                  style={{ cursor: "pointer" }}
                >
                  Click here to contact us and let us know what happened!
                </p>
              </div>
            </Card>
          )}
        </div>
      </GeneralWrapper>
    </>
  );
};

export default Checkout;
