import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from "../assets/img/logo.png";
import comm from "../assets/img/comm.png";
import grow from "../assets/img/grow.png";
import guid from "../assets/img/guid.png";
import Team from "../components/Team";

const About = () => {
  return (
    <Container style={{ minHeight: "100vh"}}>
      <Row>
        <Col>
          <div id="big-text" style={{ textShadow: "none", textAlign: "left" }}>
            About us
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <div className="about-sub-header">Who we are</div>
          <div className="text">
            Vietnam Tech Society is a non-profit organization, aspiring to be a top-of-mind organization 
            for Vietnamese people in tech. It  is our ambition to be a strong representation of the 
            Vietnamese tech community in the U.S., E.U., Singapore and Vietnam.
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="about-sub-header">Why VTS</div>
          <div className="text">
            Regardless of numerous tech talents worldwide, the Vietnamese tech community outside of 
            Vietnam is still under-represented. This is partly due to the lack of a platform where 
            Vietnamese people get together for mutual support and professional growth. To address this, 
            Vietnam Tech Society (VTS) was established.
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <div className="about-sub-header">Who we serve</div>
          <div className="text">
          VTS focuses on helping tech students and professionals whose fields include but not limited 
          to software development, data science/analytics, and product management with first job search, 
          career switch and development in general. 
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className="about-sub-header">Our mission</div>
          <div className="text">
            We focus on: <br />
            - Providing budding tech professionals with mentoring, tools, and platforms to land their dream internships/jobs.<br />
            - Granting companies direct and quick access to a quality Vietnamese tech workforce.
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "20vh"}}>
        <Col>
          <div id="big-text" style={{ textShadow: "none", textAlign: "left" }}>
            Our logo
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "10vh" }} className="align-items-center logo-container">
        <Col xs={12} sm={3} style={{ marginTop: "30px" }}>
          <Image src={logo} alt="logo" style={{ maxWidth: "100%", height: "auto" }} />
        </Col>
        <Col xs={12} sm={3} style={{ marginTop: "30px" }}>
          <div id="about-logo-icon">
            <Image src={comm} alt="comm" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div className="des">Community</div>
        </Col>
        <Col xs={12} sm={3} style={{ marginTop: "30px" }}>
          <div id="about-logo-icon">
            <Image src={grow} alt="grow" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div className="des">Growth</div>
        </Col>
        <Col xs={12} sm={3} style={{ marginTop: "30px" }}>
          <div id="about-logo-icon">
            <Image src={guid} alt="guid" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div className="des">Guidance</div>
        </Col>
      </Row>
      <Row style={{ marginTop: "20vh" }}>
        <Col>
          <div id="big-text" style={{ textShadow: "none", textAlign: "left" }}>
            Meet our team
          </div>
        </Col>
      </Row>
      
      <Row style={{ marginTop: "2vh" }}>
        <Col>
          <div className="meet-desc">
            Meet the people who make it happen.
          </div>
        </Col>
      </Row>
      <Team />
    </Container>
  );
}

export default About;