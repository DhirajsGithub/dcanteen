import React from "react";
import Card from "react-bootstrap/Card";

const ReviewCard = (props) => {
  let variant = "Secondary";
  return (
    <Card
      border="danger"
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      style={{ maxWidth: "24rem", margin: "0 auto", height: '30rem' }}
      
    >
      <Card.Img style={{height: '60%'}} variant="top" src={props.image} />
      <Card.Body>
        <Card.Text>{props.review}</Card.Text>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
