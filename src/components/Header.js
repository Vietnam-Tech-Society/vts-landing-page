import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../assets/img/fulllogo.png";

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" className="navbar-header" sticky="top">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/product">Product</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;