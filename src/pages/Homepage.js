import React, { useEffect } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import DarkHeader from "../components/DarkHeader";
import Footer from "../components/Footer"
import headerimage from "../assets/img/header.png"
import placeholder from '../assets/img/placeholder.jpg'
import './Homepage.css'

const Homepage = () => {
    return(
        <div className="homepage">

            <div className="header">
                <img className="image1" src={headerimage}></img>
                <DarkHeader></DarkHeader>
                <div className="header-text">
                    <h1 className="header-title"> By techies, for techies </h1>
                    <h5 className="header-subtitle"> A community for Vietnamese tech enthusiasts to share expertise, make meaningful connections, and support each other.</h5>
                </div>
                <img className="image2" src={placeholder} alt=""></img>
            </div>

            <div className="establishment">
                <Row>
                    <Col xs={12} lg={6}>
                        <h1 className="text-container row-gap center-left" style={{fontWeight: "600"}}> TechSphere </h1>
                        <h4 className="text-container row-gap">
                            We are a non-profit organization, aspiring to be a top-of-mind organization for Vietnamese people in tech. It is our ambition to be a strong representation of the Vietnamese tech community in the U.S., E.U., Singapore and Vietnam.
                        </h4>
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
                        <h4 className="text-container row-gap">
                        TechSphere is an on-demand mentorship platform that lets you schedule calls with mentors within a few clicks. TechSphere gives mentees access to any suitable mentors seemlessly while giving mentors freedom to set discussion topics and level of commitment
                        </h4>
                    </Col>
                </Row>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Homepage
