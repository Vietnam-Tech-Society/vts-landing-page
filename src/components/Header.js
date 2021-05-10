import React from "react";
import { Navbar } from 'react-bootstrap';
import logo from "../assets/img/fulllogo.png";

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" className="navbar-header" sticky="top">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;