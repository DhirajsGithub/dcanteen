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
import { useContext } from "react";
import { AuthContext } from "../../Store/Api";
import { useEffect } from "react";

const ItemCard = (props) => {
  const [quantity, setQuantity] = useState(props.item?.quantity);

  const ctx = useContext(AuthContext);

  const handleAddQuantity = (item) => {
    ctx.handleAddQuantity(item);
  };

  const handleRemoveQuantity = (item) => {
    ctx.handleRemoveQuantity(item);
  };

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
                setQuantity((prvState) => {
                  if (prvState > 0) {
                    return prvState - 1;
                  } else {
                    return prvState;
                  }
                });
                handleRemoveQuantity(props.item);
              }}
              size="small"
              color="primary"
              aria-label="remove"
            >
              <RemoveCircleOutline />
            </Fab>
            <span className={classes.quantity}>{props.item?.quantity}</span>
            <Fab
              className={classes.fab}
              onClick={() => {
                setQuantity((prvState) => {
                  if (prvState < 100) {
                    return prvState + 1;
                  } else {
                    return prvState;
                  }
                });
                handleAddQuantity(props.item);
              }}
              size="small"
              color="primary"
              aria-label="add"
            >
              <AddCircleOutlineOutlined />
            </Fab>
          </div>

          <Button
            onClick={() => {
              ctx.handleRemoveItem(props.item);
            }}
            className={classes.remove}
            size="sm"
            variant="danger"
          >
            Remove
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
