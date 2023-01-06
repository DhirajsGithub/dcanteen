import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Button from "@material-ui/core/Button";
import classes from "./BottomNav.module.css";
import Navbar from "react-bootstrap/Navbar";

const BottomNav = (props) => {
  const [value, setValue] = React.useState(1);

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <div className={classes.placeOrder}>
          <h1>Rs. {props.summaryTotal}</h1>
          <Button variant="contained" color="primary">Place Order</Button>
        </div>
      </BottomNavigation>
    </div>
  );
};

export default BottomNav;
