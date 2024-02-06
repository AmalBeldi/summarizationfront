import { Col, Row } from "antd";
import React from "react";
import classes from "../Header/Header.module.css";
import logo from "../../Assets/opencems.png";
const Header = () => {
  return (
    // <div style={{ position: "relative" }}>
    // <img
    //   src={background}
    //   className={classes.backgroundImage}

    //   alt="Background"
    // />
    <Row
      className={classes.headerContainer}
      gutter={[16]}
      style={{ width: "100%", margin: 0 }}
    >
      <Col className={classes.topheader}>
        Premier parcours pour le docteur 100% digital
      </Col>
      <Col lg={4} md={24} sm={24} xs={24} className={classes.headerLogo}>
        <img src={logo} style={{ width: " 50%", height: "auto" }} />
      </Col>
    </Row>
    //   </div>
  );
};

export default Header;
