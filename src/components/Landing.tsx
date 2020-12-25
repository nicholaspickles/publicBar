import React from "react";
import { useHistory } from "react-router-dom";

import { Row, Col } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { GeneralHeader, LandingButton } from "../styles";
import landingFlower from "../localImages/flowa-01.png";

const Landing = () => {
  const history = useHistory();

  const handleShop = () => {
    history.push("/products");
  };
  return (
    <div>
      <Row style={{ height: "100vh", minHeight: "100vh" }}>
        <Col span={12}>
          <div style={{ textAlign: "center" }}>
            <img
              alt="landing page flower / drink"
              src={landingFlower}
              style={{
                maxHeight: "75vh",
                height: "50%",
                width: "auto",
              }}
            />
          </div>
        </Col>
        <Col span={12} style={{ backgroundColor: "#AAA1ED" }}>
          <GeneralHeader style={{ marginTop: "20%" }}>
            Elegant cocktails. $12.
          </GeneralHeader>
          <div style={{ textAlign: "center" }}>
            <LandingButton type="default" onClick={handleShop}>
              Start Shopping &nbsp; <RightOutlined />
            </LandingButton>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Landing;
