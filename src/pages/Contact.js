import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container style={{ minHeight: "100vh"}}>
      <Row>
        <Col sm={12} md={6}>
          <div id="big-text">Don't be shy, say Hi!</div>
        </Col>
        <Col sm={12} md={6} style={{ paddingTop: "50px" }}>
          <Form id="user-form">
            <Form.Group as={Row}>
              <Col xs={6}>
                <Form.Control type="text" placeholder="First name" />
              </Col>
              <Col xs={6}>
                <Form.Control type="text" placeholder="Last name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col xs={12}>
                <Form.Control type="text" placeholder="Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col xs={12}>
                <Form.Control type="text" as="textarea" rows={7} placeholder="Hi VTS, I would like to..."  id="textarea" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col xs={12} style={{ display: "flex", justifyContent: "right" }}>
                <Button id="subscribe-button">Submit</Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;