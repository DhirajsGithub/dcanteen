import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classes from "./Navs.module.css";
import UseScrollPosition from "../Hooks/UseScrollPosition";

const Navs = () => {
  const scrollPosition = UseScrollPosition();
  console.log(window.pageYOffset)
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="transparent"
      variant="dark"
    >
      <Container>
        {/* <Navbar.Brand>
          <NavLink to="/" className={classes.navBrand}>
          <i style={{color: 'white'}} class="fa-solid fa-utensils"></i>Dcanteen
          </NavLink>
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={(navData)=> navData.isActive ? classes.active : classes.navItem} to="/home">
              Home
            </NavLink>
            <NavLink className={(navData)=> navData.isActive ? classes.active : classes.navItem} to="/service">
              Service
            </NavLink>
            <NavLink className={(navData)=> navData.isActive ? classes.active : classes.navItem} to="/menu">
              Menu
            </NavLink>
            <NavLink className={(navData)=> navData.isActive ? classes.active : classes.navItem} to="/about">
              About us
            </NavLink>
          </Nav>
          <Nav className={classes.navItems2}>
            <NavLink className={classes.navItem} to="/">
            sound
            </NavLink>
            <NavLink className={(navData)=> navData.isActive ? classes.active : classes.navItem} to="/review">
              Review
            </NavLink>
            <NavLink className={classes.navItem} to="/">
              <Button variant="danger">Order Online</Button>{" "}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
