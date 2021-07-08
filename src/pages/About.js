import React, { useEffect } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import LightHeader from "../components/LightHeader"
import Footer from "../components/Footer"
import './About.css'

const About = () => {
    return(
        <div>
            <LightHeader></LightHeader>
            <div className="intro">
                <h1 className="text-container big-font text-bold"> Placeholder Text </h1>
                <h3 className="text-container text-bold">
                    In 2020, we realized that Vietnamese tech students and professionals rarely get the right help when they struggle with professional careers
                </h3>
                <h5 className="text-container"> A group of passionate students and professionals came together </h5>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default About
