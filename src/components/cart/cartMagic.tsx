import React, { useState } from "react";
import { makeNeat } from "../../shared/helperFunctions";

import { MiniImg, RemoveButton } from "../../styles";
import { Row, Col } from "antd";

//REDUX
import { ApplicationState } from "../../redux/store";
import { useSelector } from "react-redux";

const CartContent = () => {
  const [update, forceUpdate] = useState(0);
  const ordered = useSelector(
    (state: ApplicationState) => state.cart.itemsInCart
  );
  const finalArr = makeNeat(ordered);
  const handleRemoveItem = (idi) => {
    var idx = ordered.findIndex((drink) => drink.id === idi);
    ordered.splice(idx, 1);
    forceUpdate(() => update + 1);
  };

  return (
    <div>
      {finalArr.length > 0 ? (
        finalArr.map((order) => (
          <Row>
            <Col flex={1}>
              <MiniImg src={order.image} />
            </Col>
            <Col flex={2}>
              <Row>
                {order.quantity} x {order.name}
              </Row>
              <Row>
                <p style={{ float: "right" }}>${order.price}</p>
              </Row>
            </Col>
            <Col flex={1}>
              <RemoveButton
                size={"small"}
                onClick={() => handleRemoveItem(order.id)}
              >
                Remove
              </RemoveButton>
            </Col>
          </Row>
        ))
      ) : (
        <div>Cart is empty</div>
      )}
    </div>
  );
};

export default CartContent;
