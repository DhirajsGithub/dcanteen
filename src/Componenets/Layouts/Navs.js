import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classes from "./Navs.module.css";
import { Cart } from "./Cart/Cart";
import Sound from "./Sound/Sound";

const Navs = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className={classes.navBrand}>
            <i
              style={{ color: "#fa4f4f" }}
              className="fa-solid fa-utensils me-2"
            ></i>
            Dcanteen
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.navItem
              }
              to="/home"
            >
              Home
            </NavLink>

            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.navItem
              }
              to="/menu"
            >
              Menu
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.navItem
              }
              to="/profile"
            >
              <i className="fa-solid fa-user"></i>
            </NavLink>
          </Nav>
          <Nav className={classes.navItems2}>
            <NavLink className={classes.navItem}>
              <Sound />
            </NavLink>
            <NavLink
              className={`${classes.navItem} ${classes.cartBtn}`}
              to="/cart"
            >
              <Cart />
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
