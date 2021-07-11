import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import LightHeader from "../components/LightHeader"
import Footer from "../components/Footer"
import ProductGrid from "../components/ProductGrid"

const Product = () => {


    const mentorArray = [
        {
          title: "Henry Le",
          subtitle: "PlaceHolder",
          icon: require("../assets/img/henry.png"),
        },
        {
            title: "Henry Le",
            subtitle: "PlaceHolder",
            icon: require("../assets/img/henry.png"),
        },
        {
            title: "Henry Le",
            subtitle: "PlaceHolder",
            icon: require("../assets/img/henry.png"),
        },
        {
            title: "Henry Le",
            subtitle: "PlaceHolder",
            icon: require("../assets/img/henry.png"),
        }
    ]



    return(
        <div>
            <LightHeader/>
            <ProductGrid>{mentorArray}</ProductGrid>
            <Footer/>
        </div>
    )
}

export default Product
