import React, { useState } from 'react';
import { Form, Col, Container, Row, Button, Image, Modal } from 'react-bootstrap';
import arrow from "../assets/img/arrow.png";
import map from "../assets/img/map.png";
import group from "../assets/img/group.png";
import gradient from "../assets/img/gradient.png";
import user from "../assets/img/user.png";
import res from "../assets/img/res.png";
import acc from "../assets/img/acc.png";
import incl from "../assets/img/incl.png";
import sub from "../assets/img/sub.png";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Row id="subscribe-form">
        <Col>
          <Form style={{width: "100%"}}>
            <Form.Row >
              <Col xs={8} sm={{ span: 5, offset: 3 }}>
                <Form.Control size="lg" type="email" placeholder="Email" id="cta" />
              </Col>
              <Col xs={4} sm={2}>
                <Button size="lg" id="cta-button">Subscribe</Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
      {/* <Image src={why} fluid style={{ position: 'absolute', left: "0", right: "0", width: "100vw", marginTop: "60vw"}} /> */}
      <Row style={{marginTop: "20vh"}}>
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <div id="small-text">
                Who we are
              </div>
              <div id="why-text">
                Vietnam Tech Society (VTS) is a non-profit organization aiming to be a representation of the Vietnamese tech community in the U.S.
              </div>
              <div id="small-text">
                Why Vietnam Tech Society
              </div>
              <div id="why-text">
                Vietnam Tech Society (VTS) is established to address the under-representation of Vietnamese in the tech industry.
              </div>
            </Col>
          </Row>
          <Row style={{marginTop: "5vh" }} className="justify-content-center">
            <a style={{ zIndex: "2" }} href="/about">
              <div style={{ display: "inline-block"}} id="learn">Learn more</div>
              <img style={{ display: "inline-block", marginLeft: "10px"}} src={arrow} id="arrow" alt="arrow" />
            </a>
          </Row>
          <Row style={{marginTop: "30vh"}}>
            <Col>
              <div style={{ textAlign: "center"}} id="value-head">
                At VTS, we value:
              </div>
            </Col>
          </Row>
          <Row style={{marginTop: "5vh"}}>
            <Col sm style={{ marginTop: "20px" }}>
              <div style={{ textAlign: "center"}}>
                <div style={{ width: "auto", height: "100px" }}>
                  <Image src={user} />
                </div>
                <div id="learn" style={{ color: "white", marginTop: "50px" }}>User-centricity</div>
                <div id="value-text">
                  Understanding clientele’s demand, VTS offers users highly beneficial products developed by an experienced founding team.
                </div>
              </div>
            </Col>
            <Col sm style={{ marginTop: "20px" }}>
              <div style={{ textAlign: "center"}}>
                <div style={{ width: "auto", height: "100px" }}>
                  <Image src={res} />
                </div>
                <div id="learn" style={{ color: "white", marginTop: "50px" }}>Resourcefulness</div>
                <div id="value-text">
                  At VTS, mentees would be equipped with essential insights, skills, experience, connections, and opportunities to thrive in different environments.
                </div>
              </div>
            </Col>
            <Col sm style={{ marginTop: "20px" }}>
              <div style={{ textAlign: "center"}}>
                <div style={{ width: "auto", height: "100px" }}>
                  <Image src={acc} />
                </div>
                <div id="learn" style={{ color: "white", marginTop: "50px" }}>Accessibility</div>
                <div id="value-text">
                  VTS promises mentees good company and affordability.
                </div>
              </div>
            </Col>
            <Col sm style={{ marginTop: "20px" }}>
              <div style={{ textAlign: "center"}}>
                <div style={{ width: "auto", height: "100px" }}>
                  <Image src={incl} />
                </div>
                <div id="learn" style={{ color: "white", marginTop: "50px" }}>Inclusivity</div>
                <div id="value-text">
                  At VTS, we build a support network where every member is equally valued and their career development is fostered.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Row>
      
      
      <Row style={{marginTop: "20vh"}} className="justify-content-center">
        <div id="final-cta">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} sm={9} className="justify-content-center" style={{ marginBottom: "20px" }}>
                <div id="final-cta-big-text">Be the first to know</div>
                <div id="final-cta-small-text">Get exclusive updates of our work</div>
              </Col>
              <Col xs={12} sm={3} style={{ alignItems: "center", justifyContent: "center", paddingBottom: "25px" }}>
                <Button id="final-cta-button" onClick={handleShow}>Sign up today</Button>
              </Col>
              </Row>
          </Container>
        </div>
        <Modal show={show} onHide={handleClose} contentClassName="custom-modal-dialog">
          <Modal.Header style={{ border: "none", color: "#5401A1 !important" }}>
            <button className="close" onClick={handleClose}>
              <span style={{ color: "#5401A1" }} aria-hidden="true">&times;</span>
            </button> 
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row className="justify-content-center">
                <img src={sub} alt="sub" />
              </Row>
              <Row className="justify-content-center" style={{ marginTop: "20px"}}>
                <div id="sub-join">
                  Join our email list to
                </div>
                <div id="sub-join">
                  get the latest updates.
                </div>
              </Row>
              <Row className="justify-content-center" style={{ marginTop: "20px"}}>
                <Form style={{width: "100%"}}>
                  <Form.Row >
                    <Col xs={8}>
                      <Form.Control size="lg" type="email" placeholder="Email" id="modal-form" />
                    </Col>
                    <Col xs={4}>
                      <Button size="lg" id="modal-submit-button">Subscribe</Button>
                    </Col>
                  </Form.Row>
                </Form>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </Row>
    </Container>
  );
}

export default Home;