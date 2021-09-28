import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import './About.css'
import image from "../../assets/img/about_us_page_image.png"
import { MemberGrid } from "../../components/MemberGrid"
import subheader from "../../assets/img/subheader.png"
import about1 from "../../assets/img/about_us_1.png"
import about2 from "../../assets/img/about_us_2.png"
import * as constants from '../../components/util/constants';
import { Partner } from '../../components/Partner'

const About = () => {
    return(
        <div className="about-page">
            <div className="intro">
                    <p className="text-container big-font text-bold">To advance Vietnamese  <br/>
                    students and professionals 
                    </p>
                    <h3 className="text-container text-bold">
                        In 2020, we realized that Vietnamese tech students and professionals rarely get the right help when they struggle with professional careers
                    </h3>
                    <h4 className="text-container"> A group of passionate students and professionals came together </h4>
            </div>
            <div className="establishment">
                <Row>
                    <Col xs={12} lg={6}>
                    <h1 className="text-container text-bold row-gap"> Vietnam Tech Society (VTS) was established </h1>
                        <h4 className="text-container row-gap">
                            We are a non-profit organization, aspiring to be a top-of-mind organization for Vietnamese people in tech. It is our ambition to be a strong representation of the Vietnamese tech community in the U.S., E.U., Singapore and Vietnam.
                        </h4>
                    </Col>
                    <Col xs={12} lg={6}>                     
                        <Image src={about1} alt="commitment" style={{ width: "100%", margin: "auto"}}/>
                    </Col>
                </Row>
            </div>

            <div className="establishment">
                <Row>
                <Col xs={12} lg={6} >                     
                        <Image src={about2} alt="commitment" style={{ width: "100%", margin: "auto"}}/>
                    </Col>
                    <Col xs={12} lg={6}>
                    <h1 className="text-container text-bold row-gap"> We focus on</h1>
                        <h4 className="text-container row-gap ">
                        helping tech students and professionals whose fields include but not limited to software development, data science/analytics, and product management with first job search, career switch and development in general.
                        </h4>
                    </Col>

                </Row>
            </div>
   
            <div className="commitment">
                <Row><h1 className="text-container text-bold"> We are committed to</h1></Row>
                <Row>
                    <Col xs={12} sm={6}>
                        <h4 className="text-container row-gap">  Providing budding tech professionals with mentoring, tools, and platforms to land their dream internships/jobs.</h4>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h4 className="text-container row-gap">Granting companies direct and quick access to a quality Vietnamese tech workforce </h4>
                    </Col>
                </Row>
                <div className="image-container">  
                    <Image src={image} alt="commitment" style={{ width: "100%", margin: "auto", borderRadius: "2%" }}/>
                </div>
            </div>

            <div className="subheader">
                <Row>
                    <Col xs={6}>
                        <p className="subheader-text"> Our Team</p>
                    </Col>
                    <Col xs={6}>                     
                        <Image id="subheader-img" src={subheader} alt="subheader"  />
                    </Col>
                </Row>
            </div>
            <MemberGrid array={constants.teamInfo} />

            <div className="subheader">
                <Row>
                    <Col xs={6}>
                        <p className="subheader-text"> Our Mentors</p>
                    </Col>
                    <Col xs={6}>                     
                        <Image id="subheader-img" src={subheader} alt="subheader"  />
                    </Col>
                </Row>
            </div>
            <MemberGrid array={constants.mentorInfo} />  
            <div className="subheader">
                <Row>
                    <Col xs={6}>
                        <p className="subheader-text"> Our Partner</p>
                    </Col>
                    <Col xs={6}>                     
                        <Image id="subheader-img" src={subheader} alt="subheader"  />
                    </Col>
                </Row>
            </div>
            <Partner />
        </div>
    )
};

export default About;
