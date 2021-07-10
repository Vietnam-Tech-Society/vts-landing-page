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
                <div className="absolute-break"></div>
            </div>
            <div className="header"></div>
            <Footer></Footer>
        </div>
    )
}

export default Homepage
