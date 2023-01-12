import React, { useContext } from "react";
import { AuthContext } from "../../Store/Api";
import classes from "./Profile.module.css";
import UserCard from "./UserCard";
import Card from "react-bootstrap/Card";

const Profile = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className={classes.main}>
      <div>
        <Card bg="dark" style={{ width: "20rem" }} body>
          <p>Hello,</p>
          <div>
            <h2>
              {" "}
              <i className="fa-solid fa-user"></i> &nbsp;
              {ctx.user?.name}
            </h2>
          </div>
        </Card>
        <br />
        <UserCard user={ctx.user ? ctx.user : {}} />
      </div>
      <h1>Orders</h1>
      <div className={classes.orders}></div>
    </div>
  );
};

export default Profile;
