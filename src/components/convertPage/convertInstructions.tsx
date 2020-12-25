import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

import { GeneralHeader, GeneralWrapper, InstructionCard } from "../../styles";

const Instructions = () => {
  return (
    <GeneralWrapper>
      <GeneralHeader>How conversion works</GeneralHeader>
      <Row>
        <Col span={6}>
          <InstructionCard
            title="Step 1"
            hoverable
            headStyle={{
              backgroundColor: "#707F9C",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
          >
            <p>Pick a type of conversion you want with the form below</p>
          </InstructionCard>
        </Col>
        <Col span={6}>
          <InstructionCard
            title="Step 2"
            hoverable
            headStyle={{
              backgroundColor: "#707F9C",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
          >
            <p>select the details</p>
          </InstructionCard>
        </Col>
        <Col span={6}>
          <InstructionCard
            title="Step 3"
            hoverable
            headStyle={{
              backgroundColor: "#707F9C",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
          >
            <p>
              Deliver your bottle/Use a pickup service to get it from your home
            </p>
          </InstructionCard>
        </Col>
        <Col span={6}>
          <InstructionCard
            title="Step 3"
            hoverable
            headStyle={{
              backgroundColor: "#707F9C",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
          >
            <p>Wait for the drink to be delivered to you</p>
          </InstructionCard>
        </Col>
      </Row>
    </GeneralWrapper>
  );
};

export default Instructions;
