import React from 'react';
import bigLogo from "../assets/img/Logo_lettermark_dark.svg";
import fb from "../assets/img/fb.png";
import li from "../assets/img/li.png";
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} sm={8} style={{ marginBottom: "20px"}}>
            <img src={bigLogo} alt="" style={{ maxWidth: "80%", height: "auto" }} />
          </Col>
          <Col xs={12} sm={4} style={{ marginBottom: "20px"}} className="flex-gap">
            <a href="https://www.facebook.com/VietnamTechSociety">
              <img src={fb} alt="fb" style={{ maxWidth: "100%", height: "auto" }} />
            </a>
            <a href="https://www.linkedin.com/company/vietnam-tech-society/">
              <img src={li} alt="li" style={{ maxWidth: "100%", height: "auto" }} />
            </a>
          </Col>
        </Row> 
      </Container>
    </div>
  );
} 

export default Footer;