import React from 'react'
import Navs from '../Componenets/Layouts/Navs';
import classes from './Home.module.css';
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div className={classes.home}>
      <main>
        <h1 className={classes.heading}>DCanteen</h1>
        <h2 className={classes.contain}>Always fresh & delighful</h2>
        <Button className={classes.orderBtn} variant="danger">Order Online</Button>{" "}
      </main>

    </div>
  )
}

export default Home