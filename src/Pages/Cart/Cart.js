import React from "react";
import { useContext } from "react";
import { NavLink } from "react-bootstrap";
import { AuthContext } from "../../Store/Api";
import BottomNav from "./BottomNav";
import classes from "./Cart.module.css";
import ItemCard from "./ItemCard";
import Summary from "./Summary";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [t, setT] = useState(0)
  const summaryTotal = (total)=>{
    setT(total);
  }
  const ctx = useContext(AuthContext);
  const cartIsEmpty = (
    <div>
      <h1 style={{ color: "yellow", margin: "2rem 0" }}>Your Cart is Empty</h1>
      <Link to="/menu">
        <Button variant="warning">Our Menu</Button>{" "}
      </Link>
    </div>
  );
  return (
    <div className={classes.root}>
      <div className={classes.itemsSumary}>
        <div className={classes.items}>
          {ctx.items.length == 0 && cartIsEmpty}
          {ctx.items.map((item, index) => {
            return <ItemCard key={index} item={item} />;
          })}
        </div>

        <div className={classes.summary}>{ctx.items.length > 0 && <Summary summaryTotal={summaryTotal} />}</div>
      </div>
      <footer>{ctx.items.length > 0 && <BottomNav summaryTotal={t} />}</footer>
    </div>
  );
};

export default Cart;
