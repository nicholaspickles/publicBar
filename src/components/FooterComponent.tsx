import React from "react";

//AESTHETICS imports
import {
  FootHeader,
  FootText,
  FootTextBold,
  FootInfo,
  Flower1,
  Flower2,
  FootFlowers,
} from "../styles";
import { Layout, Row, Col } from "antd";
import {
  InstagramOutlined,
  GithubOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import cutflower1 from "../localImages/cutflower1.png";
import cutflower2 from "../localImages/cutflower2.png";
import newFlowa from "../localImages/newFlowa.png";

const { Footer } = Layout;

const Queries = () => {
  return (
    <div>
      <FootHeader>
        <p>S A Y &nbsp; H I !</p>
      </FootHeader>
      <FootText>
        <p>
          Got any questions,enquires or ideas?
          <br />
          Feel free to get in touch with us!
        </p>
        <FootTextBold>
          <p style={{ marginTop: 20 }}>nicholaskongsg@gmail.com</p>
          <p>+65 9855 6745</p>
        </FootTextBold>
      </FootText>
    </div>
  );
};

const FollowUs = () => {
  return (
    <div>
      <FootHeader>
        <p>F O L L O W &nbsp; U S </p>
      </FootHeader>
      <FootText style={{ marginBottom: 10, alignContent: "center" }}>
        <p>Nicholas "Pickles" Kong</p>
        <a
          href="https://www.instagram.com/nicholaspickles/"
          rel="noreferrer"
          target="_blank"
          style={{ marginRight: 20 }}
        >
          <InstagramOutlined style={{ color: "white" }} />
        </a>
        <a
          href="https://www.github.com/nicholaspickles"
          target="_blank"
          rel="noreferrer"
        >
          <GithubOutlined style={{ color: "white" }} />
        </a>
      </FootText>
      <FootText style={{ marginBottom: 10 }}>
        <p>Amanda "Sugarpeas" Kong</p>
        <a
          href="https://www.instagram.com/kong.pdf/"
          rel="noreferrer"
          target="_blank"
          style={{ marginRight: 20 }}
        >
          <InstagramOutlined style={{ color: "white" }} />
        </a>
        <a
          href="https://amandakongakk.wixsite.com/amandakong"
          target="_blank"
          rel="noreferrer"
        >
          <SmileOutlined style={{ color: "white" }} />
        </a>
      </FootText>
    </div>
  );
};

const Policy = () => {
  return (
    <div>
      <FootHeader>P O L I C Y</FootHeader>
      <FootText>
        <p>
          Don't get sick - after I sell it to you,
          <br />
          IT AIN'T MY PROBLEM
        </p>
      </FootText>
    </div>
  );
};

const FooterText = () => {
  return (
    <FootInfo style={{ zIndex: 5 }}>
      <Row justify="center" align="middle">
        <Col xs={24} xl={8}>
          <Queries />
        </Col>
        <Col xs={24} xl={8}>
          <FollowUs />
        </Col>
        <Col xs={24} xl={8}>
          <Policy />
        </Col>
      </Row>
    </FootInfo>
  );
};

const Foot = () => {
  return (
    <Footer
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        height: "30%",
        backgroundColor: "#3E3F5A",
        textAlign: "center",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Row>
        <Col flex={1}>
          <Flower1 src={cutflower1} />
        </Col>
        <Col flex={15}>
          <FooterText />
        </Col>
        <Col flex={1}>
          <Flower2 src={newFlowa} />
        </Col>
      </Row>
    </Footer>
  );
};

export default Foot;
