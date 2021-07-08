import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../assets/img/Logo_full_dark.svg"

const LightHeader = () => {
  return (
    <Navbar expand="lg" bg="light" className="navbar-header">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#product">Product</Nav.Link>
        <Nav.Link href="#about">About Us</Nav.Link>
        <Nav.Link href="#blog">Blog</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default LightHeader;