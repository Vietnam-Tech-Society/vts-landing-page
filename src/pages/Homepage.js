import React, { useEffect } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import DarkHeader from "../components/DarkHeader";
import LightHeader from "../components/LightHeader"
import Footer from "../components/Footer"
const Homepage = () => {
    return(
        <div>
            <DarkHeader></DarkHeader>
            <LightHeader></LightHeader>
            <Footer></Footer>
        </div>
    )
}

export default Homepage
