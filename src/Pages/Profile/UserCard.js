import React from "react";
import Card from "react-bootstrap/Card";
import classes from "./Profile.module.css";

const UserCard = (props) => {
  return (
    <Card bg="dark" style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title>
          {" "}
          <i class="fa-solid fa-location-dot"></i> &nbsp; Your Address
        </Card.Title>
        <hr />
        <Card.Text>
          <p className={classes.edit}>Hostel : {props.user?.address?.hostel}</p>
          <p>Floor : {props.user?.address?.floor}</p>
          <p>Room No : {props.user?.address?.roomNo}</p>
        </Card.Text>
        <Card.Link className={classes.edit}>Edit</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
