import React from "react";
import classes from "./Service.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Service = () => {
  let variant = "Dark";
  return (
    <div className={classes.service}>
      <Container>
      <div className={classes.heading}>
        <h1>Services</h1>
      </div>
      
        <Row className={classes.row}>
          <Col className={classes.col} md={6} lg={3} sm={12}>
            <Card
              border="danger"
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "95%", margin: "0 auto" }}
              className="mb-2"
            >
              <Card.Header className={classes.cardHeader}>
                Best Chef Cooks
              </Card.Header>
              <Card.Body>
                <Card.Title className={classes.cardTitle}>
                  <i className="fa-solid fa-kitchen-set"></i>
                </Card.Title>
                <Card.Text className={classes.cardText}>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={classes.col} md={6} lg={3} sm={12}>
            <Card
              border="danger"
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "95%", margin: "0 auto" }}
              className="mb-2"
            >
              <Card.Header className={classes.cardHeader}>
                Always Delicious Food
              </Card.Header>
              <Card.Body>
                <Card.Title className={classes.cardTitle}>
                  <i className="fa-solid fa-pizza-slice"></i>
                </Card.Title>
                <Card.Text className={classes.cardText}>
                  So blinded by desire, that they cannot foresee the pain and
                  trouble that are bounder to ensue.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={classes.col} md={6} lg={3} sm={12}>
            <Card
              border="danger"
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "95%", margin: "0 auto" }}
              className="mb-2"
            >
              <Card.Header className={classes.cardHeader}>
                High Quality Service
              </Card.Header>
              <Card.Body>
                <Card.Title className={classes.cardTitle}>
                  <i className="fa-solid fa-bell-concierge"></i>
                </Card.Title>
                <Card.Text className={classes.cardText}>
                  He rejects pleasures to secure other greater pleasures, or
                  else he endures pains.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className={classes.col} md={6} lg={3} sm={12}>
            <Card
              border="danger"
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "95%", margin: "0 auto" }}
              className="mb-2"
            >
              <Card.Header className={classes.cardHeader}>
                Staff of High Level
              </Card.Header>
              <Card.Body>
                <Card.Title className={classes.cardTitle}>
                  <i className="fa-solid fa-people-group"></i>
                </Card.Title>
                <Card.Text className={classes.cardText}>
                  Obligations of business frequently occur that pleasures have
                  to be repudiated and accepted.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
