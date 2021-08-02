import React from 'react'
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import * as constants from '../../components/util/constants';
import { Col, Row, Image, Button } from 'react-bootstrap'
import './Product.css'
import placeholder from "../../assets/img/placeholder.jpg"

const Product = () => {
    return (
        <div className="product-page">
          <Row style={{marginTop:"5vw"}}>
            <Col sm={12} lg={5} className="center">
              <h1 className="bold row-margin">Find, Book and Meet Mentors around the world </h1>
              <h5 className="row-margin" style={{marginTop:"4vw"}} >Get guidance and learn from over 2,261+ mentors in world-class companies with our global community.</h5>
              <Button style={{backgroundColor:"#14ffd8", padding:"10px", color: "#010042", fontWeight: "700", borderStyle: "hidden"}} className="row-margin farther">Sign up for private beta testing &#62;</Button>
            </Col>
            <Col sm={12} lg={7} className="img-container">
              <Image src={placeholder} id="img"/>
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
            <Col xs={12} md={4} className="center" >
              <h2 className="bold row-margin"> Why mentors choose TechSphere</h2>
            </Col>
            <Col xs={12} md={8} >
              <ProductGrid array={constants.mentorArray} />
            </Col>
          </Row>

          <Row className="container-gap">
            <Col xs={12} xl={8} className="center"  >
              <h2 className="bold row-margin">Be the first one to experience our product</h2>
            </Col>
            <Col xs={12} xl={4} className="center" style={{display:"flex"}}  >
            <Button style={{backgroundColor:"#14ffd8", padding:"10px", color: "#010042", fontWeight: "700", borderStyle: "hidden"}} className="row-margin closer  center">Sign up for private beta testing &#62;</Button>
            </Col>
          </Row>
          
        </div>
    
    );
};

export default Product;
