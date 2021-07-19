import React from 'react';
import bigLogo from "../../assets/img/Logo_lettermark_dark.svg";
import fb from "../../assets/img/facebook.png";
import mail from "../../assets/img/Mail.png"
import ig from "../../assets/img/instagram.png"
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <div id="footer">
        <Row >
          <Col xs={12} lg={7}>
            <img src={bigLogo} className="disappear" alt="" />
          </Col>
          <Col xs={12} lg={5}className="flex-gap center">
            <img src={fb}  />
            <img src={mail} />
            <img src={ig} />

          </Col>
        </Row> 

        <Row>
          <Col xs={12} lg={6} className="center-left">Copyright 2021 - Vietnam Tech Society</Col>
          <Col xs={12} lg={6} className="flex-gap center">
              <a href="/">Contact Us</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Use</a>
          </Col>
        </Row>
    </div>
  );
} 

export default Footer;