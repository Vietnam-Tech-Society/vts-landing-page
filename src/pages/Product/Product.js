import React from 'react'
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import * as constants from '../../components/util/constants';
import { Col, Row, Image, Button } from 'react-bootstrap'
import './Product.css'
import header from "../../assets/img/product_page_header.png"
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="product-container">
          <Row style={{ paddingLeft: "10vw", marginTop: "5vw"}} >
            <Col sm={12} xl={6} className="center">
              <h1 className="bold row-margin">
                Find, Book and Meet Mentors around the world
              </h1>
              <h5 className="row-margin" style={{marginTop:"4vw"}}>
                Get guidance and learn from mentors in world-class companies with our global community.
              </h5>
              <Link to={{ pathname:"https://techsphere.vietnamtechsociety.org/" }} target="_blank">
                <Button
                  style={{backgroundColor:"#14ffd8", padding:"10px", color: "#010042", fontWeight: "700", borderStyle: "hidden"}}
                  className="row-margin farther"
                >
                  Sign up for private beta testing &#62;
                </Button>
              </Link>
            </Col>
            <Col sm={12} xl={6} className="img-container" >
              <Image src={header} id="img"/>
            </Col>
          </Row>

      
          <Row className="container-gap" style={{backgroundColor: "#EAF1F9"}}>
            <Col xs={12} md={4} className="center" >
              <h1 className="bold row-margin"> Why mentors choose TechSphere</h1>
            </Col>
            <Col xs={12} md={8} >
              <ProductGrid array={constants.mentorArray} />
            </Col>
          </Row>
      

          <Row className="container-gap">
            <Col xs={12} md={4} className="center" >
              <h1 className="bold row-margin"> Why mentors choose TechSphere</h1>
            </Col>
            <Col xs={12} md={8} >
              <ProductGrid array={constants.mentorArray} />
            </Col>
          </Row>

          <Row className="container-gap" style={{backgroundColor: " #5300A1", paddingTop: "4vw", paddingBottom: "4vw", color: "white"}}>
            <Col xs={12} xl={9} className="center"  >
              <h2 className="bold row-margin" >Be the first one to experience our product</h2>
            </Col>
            <Col xs={12} xl={3} className="center" style={{display:"flex"}}  >
            <Button style={{backgroundColor:"#14ffd8", padding:"10px", color: "#010042", fontWeight: "700", borderStyle: "hidden"}} className="row-margin closer  center">Signup for beta testing &#62;</Button>
            </Col>
          </Row>
          
        </div>
    
    );
};

export default Product;
