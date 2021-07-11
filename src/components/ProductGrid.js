import React, { useEffect } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import DarkHeader from "../components/DarkHeader";
import Footer from "../components/Footer"
import headerimage from "../assets/img/header.png"
import placeholder from '../assets/img/placeholder.jpg'



const ProductGrid = (array) => {


    return(
        <Container>
        <Row>
            {array.map((product, index) => {
                return (
                    <Col xs={12} md={6} className="team-img-container">
                        <Image className="product-img" src={product.icon} alt="icon" />
                        <div className="product-description">
                            <div className="title">{product.title}</div>
                            <div className="subtitle">{product.subtitle}</div>
                        </div>
                    </Col>
                )
            })}
            </Row>
      </Container>
    )
}

export default ProductGrid