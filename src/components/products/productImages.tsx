import React, { useState } from "react";
import { Row, Col } from "antd";

const ProductImages = ({ product }) => {
  const firstImage = product.image_1;
  const [bigImagePath, setBigImagePath] = useState(firstImage);

  const handleHover = (number) => {
    switch (number) {
      case "1":
        return setBigImagePath(product.image_1);
      case "2":
        return setBigImagePath(product.image_2);
      case "3":
        return setBigImagePath(product.image_3);
      default:
        setBigImagePath(product.image_1);
    }
  };

  const BigImageComponent = () => {
    return (
      <div
        style={{
          marginLeft: "7%",
          marginTop: "5%",
        }}
      >
        <img
          alt="the main featured big drink"
          src={bigImagePath}
          style={{
            width: "90%",
            maxHeight: "400px",
            objectFit: "contain",
            scale: "revert",
          }}
        />
      </div>
    );
  };

  const SideImages = () => {
    return (
      <div
        style={{
          marginLeft: "25%",
          marginTop: "15%",
          maxWidth: "40vw",
          height: "auto",
        }}
      >
        <Row gutter={[8, 16]}>
          <Col>
            <img
              alt="first drink option"
              onMouseEnter={() => handleHover("1")}
              src={product.image_1}
              style={{ maxHeight: "15vh", maxWidth: "100%" }}
            />
          </Col>
        </Row>
        <Row gutter={[8, 16]} style={{ marginTop: "2%" }}>
          <Col>
            <img
              alt="second drink option"
              onMouseEnter={() => handleHover("2")}
              src={product.image_2}
              style={{ maxHeight: "15vh", maxWidth: "100%" }}
            />
          </Col>
        </Row>
        <Row gutter={[8, 16]} style={{ marginTop: "2%" }}>
          <Col>
            <img
              alt="third drink option"
              onMouseEnter={() => handleHover("3")}
              src={product.image_3}
              style={{ maxHeight: "15vh", maxWidth: "100%" }}
            />
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: "100%" }}>
      <Row>
        <Col span={7}>
          <SideImages />
        </Col>
        <Col span={17}>
          <BigImageComponent />
        </Col>
      </Row>
    </div>
  );
};

export default ProductImages;
