import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

import CartDrawer from "./cart/Cart";

//AESTHETICS IMPORT
import "antd/dist/antd.css";
import { HeaderLogo, TopRightIcons } from "../styles";

const { Header } = Layout;

const Head = () => {
  return (
    <div className="headerWrapper" style={{ textAlign: "center" }}>
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <HeaderLogo to="/">B a r k e e p</HeaderLogo>
          <div className="menuItems">
            <Menu
              mode="horizontal"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Menu.Item>
                <NavLink to="/products">PRODUCTS</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/convert">CONVERT YOUR BOTTLE</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/about">ABOUT BARKEEP</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/contact">CONTACT US</NavLink>
              </Menu.Item>
            </Menu>
          </div>
          <TopRightIcons>
            <CartDrawer />
          </TopRightIcons>
        </Header>
      </Layout>
    </div>
  );
};

export default Head;
