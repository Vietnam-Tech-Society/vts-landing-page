import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import map from "../assets/img/map.png";
import group from "../assets/img/group.png";
import gradient from "../assets/img/gradient.png";
import logo from "../assets/img/logo.png";
import comm from "../assets/img/comm.png";
import grow from "../assets/img/grow.png";
import guid from "../assets/img/guid.png";
import Team from "../components/Team";
import CollapsibleText from "../components/CollapsibleText";

const Home = () => {
  //const [open, setOpen] = useState(false);

  return (
    <Container style={{ minHeight: "100vh"}}>
      {/* <img src={map} alt="" style={{ position: 'absolute', width: "75wh"}} /> */}
      <Image src={map} fluid style={{ position: 'absolute', left: "0" }} />
      <Image src={group} fluid style={{ position: 'absolute', left: "0", marginTop: "8vw", width: "100vw" }} />
      <Image src={gradient} fluid style={{ position: "absolute", left: "0", marginTop: "24vw", width: "100vw", right: "0" }} />
      <Row >
        <Col style={{ textAlign: "center" }}>
          <div id="big-text">
            By techies, for techies
          </div>
          <div id="small-text">
            A community for Vietnamese tech enthusiasts to share expertise, make meaningful connections, and support each other.
          </div>
        </Col>
      </Row>
      
      <Row style={{marginTop: "20vh"}}>
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <div id="small-text">
                Who we are
              </div>
              <CollapsibleText>
                <div id="why-text">
                  Vietnam Tech Society (VTS) is a non-profit organization aiming to be a representation of the Vietnamese tech community in the U.S.
                </div>
              </CollapsibleText>
              <div id="small-text" style={{ marginTop: "10px" }}>
                Why Vietnam Tech Society
              </div>
              <CollapsibleText>
                <div id="why-text">
                  Vietnam Tech Society (VTS) is established to address the under-representation of Vietnamese in the tech industry.
                </div>
              </CollapsibleText>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row style={{marginTop: "20vh" }}>
        <Col>
          <div id="big-text" style={{ textShadow: "none", textAlign: "left" }}>
            About us
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <div className="about-sub-header">Who we are</div>
          <CollapsibleText>
            <div className="text">
              Vietnam Tech Society is a non-profit organization, aspiring to be a top-of-mind organization 
              for Vietnamese people in tech. It  is our ambition to be a strong representation of the 
              Vietnamese tech community in the U.S., E.U., Singapore and Vietnam.
            </div>
          </CollapsibleText>
        </Col>
        <Col xs={12} sm={6}>
          <div className="about-sub-header">Why VTS</div>
          <CollapsibleText>
            <div className="text">
              Regardless of numerous tech talents worldwide, the Vietnamese tech community outside of 
              Vietnam is still under-represented. This is partly due to the lack of a platform where 
              Vietnamese people get together for mutual support and professional growth. To address this, 
              Vietnam Tech Society (VTS) was established.
            </div>
          </CollapsibleText>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <div className="about-sub-header">Who we serve</div>
          <CollapsibleText>
            <div className="text">
              VTS focuses on helping tech students and professionals whose fields include but not limited 
              to software development, data science/analytics, and product management with first job search, 
              career switch and development in general. 
            </div>
          </CollapsibleText>
          
        </Col>
        <Col xs={12} sm={6}>
          <div className="about-sub-header">Our mission</div>
          <CollapsibleText>
            <div className="text">
              We focus on: <br />
              - Providing budding tech professionals with mentoring, tools, and platforms to land their dream internships/jobs.<br />
              - Granting companies direct and quick access to a quality Vietnamese tech workforce.
            </div>
          </CollapsibleText>
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

export default Home;