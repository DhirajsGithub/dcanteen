import React from "react";
import classes from "./Summary.module.css";
import Table from "react-bootstrap/Table";
import { useContext } from "react";
import { AuthContext } from "../../Store/Api";

const Summary = (props) => {
  const ctx = useContext(AuthContext);
  const totalSum = ctx.items.reduce((total, curItem)=>{
    return total + (+(curItem.price) * +(curItem.quantity))
  }, 0);

  const discount = 0;
  const extras = 10;
  const delivery = 0;

  const sumTotal = totalSum + extras + delivery

  props.summaryTotal(sumTotal);
  
  return (
    <div className={classes.summary}>
      <Table variant="dark">
        <thead>
          <tr>
            <th style={{textAlign: 'center'}}>Details</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price({ctx.items.length} item{ctx.items.length >1 ? "s" : ""})</td>
            <td>Rs. {totalSum}</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>{discount}</td>
          </tr>
          <tr>
            <td>Extra</td>
            <td>Rs. {extras}</td>
          </tr>
          <tr className={classes.lastSecRow}>
            <td>Delivery</td>
            <td>{delivery}</td>
          </tr>
          <tr>
            <td>Total </td>
            <td>Rs. {sumTotal}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Summary;
