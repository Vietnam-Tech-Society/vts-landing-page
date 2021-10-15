import React, { useState, useEffect } from 'react';
import bigLogo from "../../assets/img/Logo_lettermark_dark.svg";
import { Row, Col } from 'react-bootstrap';
import './Footer.css';
import { MailIcon, FBIcon, IGIcon } from '../../assets/icons'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setIsMobile(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width <= 640;
  }

  return (
    <div id="footer">
      {/* 
        We need to split the footer into 2 mode: mobile and normal since the design for mobile is too diferent from
        the normal screen and it is not worth cramping the two versions into 1 piece of code
      */}
      {!isMobile
        ? (
          <>
            <Row >
              <Col xs={12} md={7}>
                <img src={bigLogo} className="footer-logo" alt="VTS Logo" />
              </Col>
              <Col xs={12} md={5} className="footer-social-media">
                <MailIcon />
                <Link to={{ pathname: "https://www.facebook.com/VietnamTechSociety" }} target="_blank">
                  <FBIcon />
                </Link>
                <IGIcon />
              </Col>
            </Row> 
            <Row>
              <Col xs={12} md={6}>
                <div className="copyright-text">
                  <span>Copyright 2021 - Vietnam Tech Society</span>
                </div>
              </Col>
              <Col xs={12} md={6} className="footer-social-media">
                  <a href="/">Contact Us</a>
                  <a href="/">Privacy Policy</a>
                  <a href="/">Terms of Use</a>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Col className="footer-social-media">
                <MailIcon />
                <Link to={{ pathname: "https://www.facebook.com/VietnamTechSociety" }} target="_blank">
                  <FBIcon />
                </Link>
                <IGIcon />
              </Col>
            </Row> 
            <Row style={{ marginTop: '20px' }}>
              <Col className="footer-social-media">
                <a href="/">Contact Us</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Terms of Use</a>
              </Col>
            </Row>
            <Row style={{ marginTop: '20px' }}>
              <Col className="footer-social-media">
                <span>Copyright 2021 - Vietnam Tech Society</span>
              </Col>
              
            </Row>
          </>
        )
      }
      
    </div>
  );
} 

export default Footer;