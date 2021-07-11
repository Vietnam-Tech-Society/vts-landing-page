import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import './About.css'
import placeholder from "../../assets/img/placeholder.jpg"
import { MemberGrid } from "../../components/MemberGrid"

const About = () => {
    return(
        <>
            <div className="intro">
                    <h1 className="text-container big-font text-bold"> Placeholder Text </h1>
                    <h3 className="text-container text-bold">
                        In 2020, we realized that Vietnamese tech students and professionals rarely get the right help when they struggle with professional careers
                    </h3>
                    <h4 className="text-container"> A group of passionate students and professionals came together </h4>
            </div>
            <div className="establishment">
                <h1 className="text-container text-bold"> Vietnam Tech Society (VTS) was established </h1>
                <Row>
                    <Col xs={12} sm={6}>
                        <h4 className="text-container row-gap">
                            We are a non-profit organization, aspiring to be a top-of-mind organization for Vietnamese people in tech. It is our ambition to be a strong representation of the Vietnamese tech community in the U.S., E.U., Singapore and Vietnam.
                        </h4>
                    </Col>
                    <Col xs={12} sm={6}>                     
                        <Image src={placeholder} alt="commitment" style={{ width: "100%", margin: "auto"}}/>
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
                    <Image src={placeholder} alt="commitment" style={{ width: "100%", margin: "auto" }}/>
                </div>
            </div>

            <MemberGrid></MemberGrid>
        </>
    )
};

export default About;
