import React from 'react';
import bigLogo from "../assets/img/Logo_lettermark_dark.svg";
import fb from "../assets/img/fb.png";
import li from "../assets/img/li.png";
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <div id="footer">

      <Container stick="bottom">
        <Row >
          <Col xs={12} model={8} >
            <img src={bigLogo} alt=""style={{ width: "12%", height: "auto" }} />
          </Col>
          <Col xs={12} md={4} className="flex-gap">
          </Col>
        </Row> 

        <Row>
          <Col xs={12} md={6}>Copyright 2021 - Vietnam Tech Society</Col>
          <Col xs={12} md={6} className="flex-gap">
            <a href="/">Contact Us</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Use</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
} 

export default Footer;