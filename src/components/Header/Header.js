import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import darkLogo from "../../assets/img/Logo_full_dark.svg";
import lightLogo from "../../assets/img/Logo_full_light.svg";
import './Header.css'

const Header = ({ mode }) => {
  return (
    <Navbar expand="lg" variant="light" className="navbar-header" >
      <Navbar.Brand className="logo-container" href="/">
        <img src={mode === "dark" ? lightLogo : darkLogo} alt="logo" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/product">Product</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="https://vietnamtechsociety.substack.com/">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;