import React, { useState } from "react";
import { Navbar, Nav, Button, Modal, Container, Row, Form, Col } from 'react-bootstrap';
import logo from "../assets/img/fulllogo.png";
import sub from "../assets/img/sub.png";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" variant="dark" className="navbar-header" sticky="top">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle style={{color: "white"}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link style={{color: "white", marginRight: "10px"}} href="/">Home</Nav.Link>
            <Nav.Link style={{color: "white", marginRight: "10px"}} href="/about">About</Nav.Link>
            <Nav.Link style={{color: "white", marginRight: "10px"}} href="/contact">Contact</Nav.Link>
            <Button id="subscribe-button" onClick={handleShow}>Subscribe</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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
    </>
    
  );
}

export default Header;