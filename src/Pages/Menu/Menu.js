import React, { useState } from "react";
import { useEffect } from "react";
import classes from "./Menu.module.css";
import MenuTable from "./MenuTable";
import TabPanel from "./TabPanel";
// import { useMediaQuery } from "react-responsive";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState({
    activeMenuImg:
      "https://webdesign-finder.com/marco-polo/wp-content/uploads/2017/06/Desserts_Snaks-1024x1018.jpg",
    activeMenu: "Deserts & Snacks",
    activeMenuId: 0,
  });
  const ChangeActiveMenu = (activeMenu) => {
    setActiveMenu(activeMenu);
  };
  return (
    <div className={classes.main}>
      <div className={classes.menuName}>
        <h1>Menu</h1>
        <p>{activeMenu.activeMenu}</p>
      </div>
      <div className={classes.banner}>
        <img src={activeMenu.activeMenuImg} alt="" />
      </div>
      <div className={classes.menu}>
        <TabPanel ChangeActiveMenu={ChangeActiveMenu} />
        <MenuTable activeMenu={activeMenu} />
      </div>
    </div>
  );
};

export default Menu;
