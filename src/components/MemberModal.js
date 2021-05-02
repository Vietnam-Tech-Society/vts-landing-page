import React from "react";
import { Image, Modal, Container, Row, Col } from 'react-bootstrap';
import li from "../assets/img/li.png";

const MemberModal = ({ img, name, pos, linkedin, statement, show, handleClose }) => {

  return (
    <Modal show={show} onHide={handleClose} contentClassName="custom-member-modal">
      <Modal.Header style={{ border: "none" }}>
        <button className="close" onClick={handleClose}>
          <span aria-hidden="true">&times;</span>
        </button>
      </Modal.Header>
      <Modal.Body style={{ border: "none" }}>
        <Container>
          <Row>
            <Col xs={12} sm={5}>
              <div className="team-modal-image">
                <Image className="team-img" src={img.default} alt="headshot" />
              </div>
            </Col>
            <Col xs={12} sm={7}>
              <div style={{ paddingTop: "10px"}}>
                <div className="about-sub-header">{name}</div>
                <div className="text">{pos}</div>
              </div>
              <div className="li-container">
                <a href={linkedin}>
                  <Image className="team-img" src={li} alt="linkedin" />
                </a>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <div id="modal-text">{statement}</div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer style={{ border: "none" }} />
    </Modal>
  );
}

export default MemberModal;