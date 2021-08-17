import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import './ProductGrid.css'


const ProductGrid = ({ array}) => {
    return(
        
        <Container>
          <Row>
            {array.map((product, index) => {
                return (
                    <Col xs={12} md={6} key={index} className="product-img-container">
                        <Image className="product-img" src={product.url.default} alt="icon" />
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