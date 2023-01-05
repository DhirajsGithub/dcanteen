import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import AlertLog from "./AlertLog";
import classes from "./Menu.module.css";
import MenuTable from "./MenuTable";
import TabPanel from "./TabPanel";

const Menu = () => {
  const [item, setItem] = useState({});
  const [activeMenu, setActiveMenu] = useState({
    activeMenuImg:
      "https://webdesign-finder.com/marco-polo/wp-content/uploads/2017/06/Desserts_Snaks-1024x1018.jpg",
    activeMenu: "Deserts & Snacks",
    activeMenuId: 0,
  });
  const ChangeActiveMenu = (activeMenu) => {
    setActiveMenu(activeMenu);
  };
  const alertRef = useRef();
  const AddToCartBtn = (bool, item)=>{
    setItem(item)
    alertRef.current.handleShow(bool, item)
  }
  return (
    <div className={classes.main}>
      <AlertLog variant = "success" msg={`${item.name} added to 🛒`} ref={alertRef} />
      <div className={classes.menuName}>
        <h1>Menu</h1>
        <p>{activeMenu.activeMenu}</p>
      </div>
      <div className={classes.banner}>
        <img src={activeMenu.activeMenuImg} alt="" />
      </div>
      <div className={classes.menu}>
        <TabPanel ChangeActiveMenu={ChangeActiveMenu} />
        <MenuTable AddToCartBtn={AddToCartBtn} activeMenu={activeMenu} />
      </div>
    </div>
  );
};

export default Menu;
