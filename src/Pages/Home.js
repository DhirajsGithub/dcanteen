import React, { Fragment } from "react";
import classes from "./Home.module.css";
import Button from "react-bootstrap/Button";
import About from "../Componenets/Home_Components/About";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Service from "../Componenets/Home_Components/Service";
import Review from "../Componenets/Home_Components/Review";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.home}>
        <Container>
          <Row>
            <Col className={classes.slogan} md={5} sm={12}>
              <main>
                <h2 className={classes.contain}>
                  Where every flavor tells a story | A taste you'll remember.
                </h2>
                <Button className={classes.orderBtn} variant="danger">
                  Order Online
                </Button>{" "}
              </main>
            </Col>
            <Col md={7} sm={12}>
              <div className={classes.img}>
                <img
                  src="https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Image describing food"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div></div>
      <Service />
      <About />
      <Review />
    </Fragment>
  );
};

export default Home;
