import React, { Fragment } from "react";
import Navs from "../Componenets/Layouts/Navs";
import classes from "./Home.module.css";
import Button from "react-bootstrap/Button";
import useScrollPosition from "../Componenets/Hooks/UseScrollPosition";
import About from "./About";
import Review from "./Review";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const scroll = useScrollPosition();
  console.log(scroll);
  return (
    <Fragment>
      <div className={classes.home}>
        <Container>
          <Row>
            <Col className={classes.slogan} md={5} sm={12}>
              <main>
                {/* <h1 className={classes.heading}>DCanteen</h1> */}
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
                  src="https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="fds"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
      </div>
      <About />
      <Review />
    </Fragment>
  );
};

export default Home;
