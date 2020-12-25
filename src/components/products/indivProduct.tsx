import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Col, Row, Breadcrumb } from "antd";

import { ShopOutlined } from "@ant-design/icons";

import DescriptionCard from "./description";
import ProductImages from "./productImages";
import OtherProducts from "./otherProducts";

const IndividualProduct = ({ product }) => {
  const history = useHistory();
  const handleBack = () => {
    history.push("/products");
  };

  return (
    <div>
      <Breadcrumb style={{ marginLeft: "2%", marginTop: "3%" }}>
        <Breadcrumb.Item onClick={handleBack}>
          <ShopOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col xs={24} xl={16} style={{ maxWidth: "100%" }}>
          <ProductImages product={product} />
        </Col>
        <Col xs={24} xl={8}>
          <DescriptionCard product={product} />
        </Col>
      </Row>
      <OtherProducts featured={product} />
    </div>
  );
};

export default IndividualProduct;
