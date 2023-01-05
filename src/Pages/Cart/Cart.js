import React from 'react'
import BottomNav from './BottomNav'
import classes from './Cart.module.css'
import ItemCard from './ItemCard'
import Summary from './Summary'

const Cart = () => {
  return (
    <div className={classes.root}>
    <div className={classes.itemsSumary}>
      <div className={classes.items}>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>

    <div className={classes.summary}>
    <Summary />
    </div>
    </div>
    <footer >
      <BottomNav />
    </footer>

    </div>
  )
}

export default Cart