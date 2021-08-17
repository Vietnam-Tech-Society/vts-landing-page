import React from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'
import headerimage from "../../assets/img/header.png"
import header from '../../assets/img/homepage_header.png'
import mentorship from '../../assets/img/mentorship.png'
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
                <img className="image2" src={header} alt=""></img>
            </div>

            <div className="establishment">
                <Row>
                    <Col xs={12} lg={6}>
                        <h1 className="text-container row-gap" style={{fontWeight: "600"}}> TechSphere </h1>
                        <h4 className="text-container row-gap"> We are a non-profit organization, aspiring to be a top-of-mind organization for Vietnamese people in tech. It is our ambition to be a strong representation of the Vietnamese tech community in the U.S., E.U., Singapore and Vietnam.</h4>
                        <Button style={{backgroundColor:"#EDF8FF", color: "#010042", fontWeight: "700", borderStyle: "hidden", padding:"10px", marginTop: "7.5vw", marginBottom: "7.5vw"}} className="button-container row-gap"> Start your mentorship here &#62;</Button>
                    </Col>
                    <Col xs={12} lg={6}>                     
                        <Image id="image-est" src={mentorship} alt="commitment"  />
                    </Col>
                </Row>
            </div>


            <div >
                <Row>
                    <Col xs={12} lg={4}>
                        <div className="text-grid long-column" > 
                            <div className="text-grid-container top left"> 

                            <h6> “I hope to build a platformfor people who seek mentorship and connection.”</h6>
                               <p> Vivian Luu, Software Engineer </p>
                            </div>
                        </div>
                        <div className="text-grid short-column" >
                            <div className="text-grid-container bottom left">
                                 <h6>
                            "Mentorship should be easy and accessible to Vietnamese students!""
                                </h6>
                                <p> Anh Tran, Product Manager </p>
                                </div>
                            
                        </div>
                    </Col>
                    <Col xs={12} lg={4}>
                        <div className="text-grid short-column" >
                            <div className="text-grid-container bottom left"> 
                            <h6> “It’s fun to be in a group of weird people at VTS!”</h6>
                            <p> Theodore Le, Chief of Marketing </p>
                            </div>
                        </div>
                        <div className="text-grid long-column">
                            <div className="text-grid-container bottom right"> 
                                <h6> "It’s always hard when you want to change your career path, but I’m thankful that VTS connects me with the right mentor in my new direction."</h6>
                                <p> Quynh Nguyen, Marketing </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={4}>
                        <div className="text-grid long-column" >
                            <div className="text-grid-container top right "> 
                                <h6> “Son shared with me a lot of useful materials and advice on doing LeetCode. He even offered helping with mock interview and referrals later on.</h6>
                                <p> Diep Vu,  </p>
                            </div>
                        </div>
                        <div className="text-grid short-column" >
                            <div className="text-grid-container top left"> 
                            <h6>"Why couldn’t the Vietnamese people work together and dominate the techcareer like Indian and Chinese?"</h6>
                            <p> Henry Le, CEO </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>


            <div className="establishment">
                <Row>
                    <Col xs={12} lg={6}>
                        <h1 className="text-container row-gap" style={{fontWeight: "600"}}> Our Latest Blogs </h1>
                    </Col>
                    <Col xs={12} lg={6}>                     
                        <h4 className="text-container row-gap">TechSphere is an on-demand mentorship platform that lets you schedule calls with mentors within a few clicks. TechSphere gives mentees access to any suitable mentors seemlessly while giving mentors freedom to set discussion topics and level of commitment</h4>
                        <Button style={{backgroundColor:"#EDF8FF", color: "#010042", fontWeight: "700", borderStyle: "hidden", padding:"10px"}} className="button-container row-gap"> Read our blogs &#62;</Button>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Homepage;
