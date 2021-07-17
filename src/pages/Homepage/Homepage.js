import React from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'
import headerimage from "../../assets/img/header.png"
import placeholder from '../../assets/img/placeholder.jpg'
import './Homepage.css'

const Homepage = () => {
    return (
        <>
            <div className="header">
                <img className="image1" src={headerimage} alt="logo"></img>
                <div className="header-text">
                    <h1 className="header-title"> By techies, for techies </h1>
                    <h5> A community for Vietnamese tech enthusiasts to share expertise, make meaningful connections, and support each other.</h5>
                    <Button style={{backgroundColor:"#14ffd8", color: "#010042", fontWeight: "700", borderStyle: "hidden", padding:"10px"}} className="blue-button"> Tell me more &#62;</Button>
                </div>
                <img className="image2" src={placeholder} alt=""></img>
            </div>

            <div className="establishment">
                <Row>
                    <Col xs={12} lg={6}>
                        <h1 className="text-container row-gap center-left" style={{fontWeight: "600"}}> TechSphere </h1>
                        <h4 className="text-container row-gap"> We are a non-profit organization, aspiring to be a top-of-mind organization for Vietnamese people in tech. It is our ambition to be a strong representation of the Vietnamese tech community in the U.S., E.U., Singapore and Vietnam.</h4>
                        <Button style={{backgroundColor:"#EDF8FF", color: "#010042", fontWeight: "700", borderStyle: "hidden", padding:"10px"}} className="button-container"> Explore our product &#62;</Button>
                    </Col>
                    <Col xs={12} lg={6}>                     
                        <Image id="image-est" src={placeholder} alt="commitment"  />
                    </Col>
                </Row>
            </div>

            <div className="establishment">
                <Row>
                    <Col xs={12} lg={6}>
                        <h1 className="text-container row-gap center-left" style={{fontWeight: "600"}}> Our Latest Blogs </h1>
                    </Col>
                    <Col xs={12} lg={6}>                     
                        <h4 className="text-container row-gap">TechSphere is an on-demand mentorship platform that lets you schedule calls with mentors within a few clicks. TechSphere gives mentees access to any suitable mentors seemlessly while giving mentors freedom to set discussion topics and level of commitment</h4>
                        <Button style={{backgroundColor:"#EDF8FF", color: "#010042", fontWeight: "700", borderStyle: "hidden", padding:"10px"}} className="button-container"> Read our blogs &#62;</Button>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Homepage;
