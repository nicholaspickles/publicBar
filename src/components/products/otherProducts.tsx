import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Card, Row, Col, message } from "antd";
import { GeneralHeader, AddToCart, UnderlineP } from "../../styles";
import { createEntry } from "../../shared/helperFunctions";

//REDUX
import { DrinkData } from "../../shared/products";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../redux/store";
import { visit, setAllVisited } from "../../redux/ducks/visitedProducts";
import { addCartItems } from "../../redux/ducks/cart";

const OtherProducts = ({ featured }) => {
  const dispatch = useDispatch();

  const allVisited = useSelector(
    (state: ApplicationState) => state.visited.allVisited
  );
  const visited = useSelector(
    (state: ApplicationState) => state.visited.visitedArr
  );
  const handleAdd = (drinkId) => {
    const drink = DrinkData[drinkId];
    const { _id, name, image, price } = drink;
    const order = createEntry({
      id: _id,
      quantity: 1,
      image: image,
      name: name,
      price: price,
    });
    dispatch(addCartItems(order));
    message.success({
      content: `${order.quantity} x ${order.name} has been added to your bag.`,
      duration: 0.8,
      style: {
        marginTop: "40px",
      },
    });
  };

  const visitDrink = (drinkID) => {
    if (visited.length === 5) {
      dispatch(setAllVisited(true));
    }
    if (!(drinkID in visited)) {
      dispatch(visit(drinkID));
    }
  };

  const OtherDrinks = () => {
    const notFeatured = DrinkData.filter((drink) => drink._id !== featured._id);
    console.log(notFeatured);
    var drinkArray = [];
    if (allVisited) {
      console.log(allVisited);
      drinkArray = notFeatured.slice(0, 3);
    } else {
      for (var drinkId of notFeatured) {
        if (!(drinkId._id in visited)) {
          drinkArray.unshift(drinkId);
        }
        drinkArray.push(drinkId);
      }
      drinkArray = drinkArray.slice(0, 3);
    }
    return (
      <Row
        gutter={16}
        style={{
          marginLeft: "4vw",
          marginBottom: "5vh",
        }}
      >
        {drinkArray.map((drink) => (
          <Col xs={24} xl={8} key={drink._id} style={{ textAlign: "center" }}>
            <Card
              hoverable
              bordered={false}
              style={{
                marginTop: "5%",
                textAlign: "center",
                width: "80%",
                height: "auto",
              }}
            >
              <Link
                to={`/products/${drink._id}`}
                style={{ color: "black" }}
                onClick={() => visitDrink(drink._id)}
              >
                <img
                  alt="Drankz"
                  src={drink.image}
                  style={{
                    maxHeight: "auto",
                    maxWidth: "50%",
                    marginBottom: 5,
                  }}
                />
                <br />
                <UnderlineP style={{ margin: "0", padding: "5px" }}>
                  {drink.name} <br /> ${drink.price}
                </UnderlineP>
              </Link>
              <AddToCart type="primary" onClick={() => handleAdd(drink._id)}>
                Add to Bag
              </AddToCart>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <div>
      <hr
        style={{ marginLeft: "5vw", marginRight: "5vw", marginTop: "10vh" }}
      />
      <GeneralHeader style={{ marginTop: "2vh" }}>
        check out some other products
      </GeneralHeader>
      <br />
      <OtherDrinks />
    </div>
  );
};

export default OtherProducts;
