import React from 'react'
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import * as constants from '../../components/util/constants';
import { Col, Container, Row, Image } from 'react-bootstrap'
import './Product.css'

const Product = () => {
    return (
        <div className="product-page">
          <Row className="container-gap">
            <Col xs={12} md={4} className="center" >
              <h2 className="bold row-margin"> Why mentors choose TechSphere</h2>
            </Col>
            <Col xs={12} md={8} >
              <ProductGrid array={constants.mentorArray} />
            </Col>
          </Row>
          <Row className="container-gap">
            <Col xs={12} md={4} className="center" >
              <h2 className="bold row-margin"> Why mentors choose TechSphere</h2>
            </Col>
            <Col xs={12} md={8} >
              <ProductGrid array={constants.mentorArray} />
            </Col>
          </Row>
          <Row className="container-gap">
            <Col xs={12} className="center">
            <h2 className="bold row-margin">Be the first one to experience our product</h2>
            </Col>
          </Row>
          
        </div>
    
    );
};

export default Product;
