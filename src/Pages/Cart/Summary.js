import React from "react";
import classes from "./Summary.module.css";
import Table from "react-bootstrap/Table";

const Summary = () => {
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
            <td>Price(3 items)</td>
            <td>Rs. 345</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>0</td>
          </tr>
          <tr className={classes.lastSecRow}>
            <td>Delivery</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Total </td>
            <td>Rs. 345</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Summary;
