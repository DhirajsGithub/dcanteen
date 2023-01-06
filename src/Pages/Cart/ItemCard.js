import React from "react";
import classes from "./ItemCard.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import Fab from "@material-ui/core/Fab";

import {
  AddCircleOutlineOutlined,
  RemoveCircleOutline,
} from "@material-ui/icons";
import { useState } from "react";

const ItemCard = (props) => {
  const [quantityNo, setQuantityNo] = useState(props.item?.quantity);
  return (
    <Card bg="dark" className={classes.card}>
      <Card.Header as="h5">{props.item?.name}</Card.Header>
      <Card.Body className={classes.cardBody}>
        <Figure>
          <Figure.Image
            width={170}
            height={180}
            alt="171x180"
            src={props.item?.imgUrl}
          />
        </Figure>
        <div className={classes.actions}>
          <div className={classes.addSub}>
            <Fab
            className={classes.fab}
              onClick={() => {
                setQuantityNo((prvState) => {
                  if (prvState > 0) {
                    return prvState - 1;
                  } else {
                    return prvState;
                  }
                });
              }}
              size="small"
              color="primary"
              aria-label="remove"
            >
              <RemoveCircleOutline />
            </Fab>
            <span className={classes.quantity}>{quantityNo}</span>
            <Fab
            className={classes.fab}
              onClick={() => {
                setQuantityNo((prvState) => {
                  if (prvState < 100) {
                    return prvState + 1;
                  } else {
                    return prvState;
                  }
                });
              }}
              size="small"
              color="primary"
              aria-label="add"
            >
              <AddCircleOutlineOutlined />
            </Fab>
            
          </div>

          <Button className={classes.remove} size="sm" variant="danger">Remove</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
