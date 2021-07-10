import React, { useEffect } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import DarkHeader from "../components/DarkHeader";
import Footer from "../components/Footer"
import headerimage from "../assets/img/header.png"
import './Homepage.css'

const Homepage = () => {
    return(
        <div>
            <div className="header">
                <Image src={headerimage} style={{width: "100%"}}/>
                <DarkHeader></DarkHeader>
                
                
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Homepage
