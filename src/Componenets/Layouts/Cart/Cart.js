import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useContext } from "react";
import { AuthContext } from "../../../Store/Api";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export const Cart = () => {
  const ctx = useContext(AuthContext);
  console.log(ctx.totalQuantity);

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={ctx.totalQuantity} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};
