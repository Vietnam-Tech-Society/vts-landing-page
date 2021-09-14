import React from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'
import headerimage from "../../assets/img/header.png"
import header from '../../assets/img/homepage_header.png'
import mentorship from '../../assets/img/mentorship.png'
import './Homepage.css'
import { Link } from 'react-router-dom';
import { ButtonArrow } from '../../assets/icons';

const Homepage = () => {
    return (
        <div>
            <div className="header">
                <img className="image1" src={headerimage} alt="logo"></img>
                <div className="header-text">
                    <h1 className="header-title"> By techies, for techies </h1>
                    <h5 className="header-subtitle"> A community for Vietnamese tech enthusiasts to share expertise, make meaningful connections, and support each other.</h5>
                    <Link to="/about">
                        <Button 
                            style={{
                                backgroundColor:"#14ffd8",
                                color: "#010042",
                                borderStyle: "hidden",
                                padding:"10px", 
                                fontSize: '16px',
                                fontWeight: "600"
                            }} 
                            className="blue-button"
                        >
                                Tell me more <span className="button-arrow-icon"><ButtonArrow /></span>
                        </Button>
                    </Link>
                </div>
                <img className="image2" src={header} alt=""></img>
            </div>

            <div className="establishment-homepage">
                <Row>
                    <Col xs={12} lg={6}>
                        <h1 className="text-container row-gap" style={{fontWeight: "600"}}> TechSphere </h1>
                        <h4 className="text-container row-gap">
                            TechSphere is an on-demand mentorship platform that lets you schedule calls with mentors within a few clicks. 
                            TechSphere gives mentees access to any suitable mentors seemlessly while giving mentors freedom to set 
                            discussion topics and level of commitment
                        </h4>
                        <Link to={{ pathname:"https://techsphere.vietnamtechsociety.org/" }} target="_blank">
                            <Button
                                style={{
                                    backgroundColor:"#EDF8FF",
                                    color: "#010042",
                                    borderStyle: "hidden",
                                    padding:"10px",
                                    fontSize: '16px',
                                    marginTop: '7.5vw',
                                    marginBottom: '7.5vw',
                                    fontWeight: '600'
                                }} 
                                className="button-container row-gap"
                            >
                                Start your mentorship here <span className="button-arrow-icon"><ButtonArrow /></span>
                            </Button>
                        </Link>
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
                            <div className="text-grid-container"> 

                            <h6> “I hope to build a platformfor people who seek mentorship and connection.”</h6>
                               <p> Vivian Luu, Software Engineer </p>
                            </div>
                        </div>
                        <div className="text-grid short-column" >
                            <div className="text-grid-container" style={{top: "45%"}}> 
                                 <h6>
                            "Mentorship should be easy and accessible to Vietnamese students!"
                                </h6>
                                <p> Anh Tran, Product Manager </p>
                                </div>
                            
                        </div>
                    </Col>
                    <Col xs={12} lg={4}>
                        <div className="text-grid short-column" >
                            <div className="text-grid-container" style={{top: "55%"}}> 
                            <h6> “It’s fun to be in a group of weird people at VTS!”</h6>
                            <p> Theodore Le, Chief of Marketing </p>
                            </div>
                        </div>
                        <div className="text-grid long-column">
                            <div className="text-grid-container" style={{top: "50%", right: "2%"}}> 
                                <h6> "It’s always hard when you want to change your career path, but I’m thankful that VTS connects me with the right mentor in my new direction."</h6>
                                <p> Quynh Nguyen, Marketing </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={4}>
                        <div className="text-grid long-column" >
                            <div className="text-grid-container" style={{ right: "2%"}}> 
                                <h6> "Son shared with me a lot of useful materials and advice on doing LeetCode. He even offered helping with mock interview and referrals later on."</h6>
                                <p> Diep Vu, TechSphere's Community Member </p>
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
                        <h4 className="text-container row-gap">
                            A one-stop shop for all information you need to know about the journey of working in the tech industry as a Vietnamese professional
                        </h4>
                        <Link to={{ pathname:"https://vietnamtechsociety.substack.com/" }} target="_blank">
                            <Button
                                style={{backgroundColor:"#EDF8FF", color: "#010042", fontWeight: "700", borderStyle: "hidden", padding:"10px"}} 
                                className="button-container row-gap">
                                    Read our blogs &#62;
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Homepage;
