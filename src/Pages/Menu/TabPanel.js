import React from "react";
import classes from './TabPanel.module.css'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const TabPanel = (props) => {
  const handleActiveMenu = (event) => {
    const activeMenuImgUrl = [
      "https://webdesign-finder.com/marco-polo/wp-content/uploads/2017/06/Desserts_Snaks-1024x1018.jpg",
      "https://webdesign-finder.com/marco-polo/wp-content/uploads/2017/06/Drinks_Juices-1024x1024.jpg",
      "http://webdesign-finder.com/marco-polo/wp-content/uploads/2017/06/Meat_Meals-1024x1024.jpg",
    ];
    let activeMenu = event.target.id.slice(8);
    let activeMenuId = event.target.id.slice(6, 8);
    let activeMenuImg = activeMenuImgUrl[+activeMenuId];
    props.ChangeActiveMenu({ activeMenu, activeMenuImg });
  };
  return (
    <Tabs
      defaultActiveKey="0 Deserts & Snacks"
      id="p"
      className={`mb-3 ${classes.panelTabs}`}
      justify
      onClick={handleActiveMenu}
    >
      <Tab eventKey="0 Deserts & Snacks" title="Deserts & Snacks">
        <div name="Deserts & Snacks">Deserts lorem ipsum and shit</div>
      </Tab>
      <Tab eventKey="1 Drinks & Juices" title="Drinks & Juices">
        Drinks lorem ipsum and shit
      </Tab>
      <Tab eventKey="2 Meat & Meals" title="Meat & Meals">
        Meat lorem ipsum and shit
      </Tab>
      {/* <Tab eventKey="contact" title="Contact">
      lorem ipsum and shit
    </Tab> */}
    </Tabs>
  );
};

export default TabPanel;
