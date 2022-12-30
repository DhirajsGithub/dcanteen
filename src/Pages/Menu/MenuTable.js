import React, { useEffect, useState } from "react";
import classes from "./MenuTable.module.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';


const MenuTable = (props) => {
  const menuItem = [
    [
      {
        name: "GRANOLA TRIFLES",
        price: "$11.00",
        imgUrl:
          // "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-18-copyright-240x240.jpg",   describe : "This mini delight turns your regular meal into amazing sensation!"
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-18-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
      {
        name: "CARROT CUPCAKES",
        price: "$9.00",
        imgUrl:
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-19-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
      {
        name: "CREME BRULEE",
        price: "$21.00",
        imgUrl:
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-20-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
      {
        name: "CHOCOLATE CAKE",
        price: "$14.00",
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-21-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
      {
        name: "CHOCOLATE CAKE",
        price: "$14.00",
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-21-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
      {
        name: "CHOCOLATE CAKE",
        price: "$14.00",
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-21-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
    ],
    [
      {
        name: "Beer",
        price: "$15.00",
        imgUrl:
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-22-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
      {
        name: "MILKSHAKES",
        price: "$7.00",
        imgUrl:
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-20-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
      {
        name: "SAKE SPIRTZER",
        price: "$5.00",
        imgUrl:
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/09/drink-5-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
      {
        name: "ICED COFFEE",
        price: "$6.00",
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/09/drink-2-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
      {
        name: "CHOCOLATE CAKE",
        price: "$14.00",
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-21-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
      {
        name: "CHOCOLATE CAKE",
        price: "$14.00",
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-21-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
    ],
    [
      {
        name: "THE TURKEY BURGER",
        price: "$18.00",
        imgUrl:
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-6-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
      {
        name: "SPICY CHICKEN WRAP",
        price: "$28.00",
        imgUrl:
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-8-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
      {
        name: "MASALA HOT DOG",
        price: "$22.00",
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-13-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
      {
        name: "BLACK BUN BURGER",
        price: "$34.00",
        imgUrl:
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-3-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
      {
        name: "CHOCOLATE CAKE",
        price: "$14.00",
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-21-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
      {
        name: "CHOCOLATE CAKE",
        price: "$14.00",
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-21-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
      },
    ],
  ];

  const [windowWidth, setWindowWidth] = useState(0);
  console.log(windowWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  return (
    <div className={classes.tables}>
      <Row xs={1} lg={4} md={2} className="g-4">
        {menuItem[props.activeMenu.activeMenuId].map((item, index) => {
          return (
            <Col key={index}>
              <Card className={classes.card} bg="dark" text="light">
                <Card.Img className={classes.cardImg} variant="top" src={item.imgUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Button variant="secondary">Add to <i className="fa-solid fa-cart-arrow-down"></i></Button>{' '}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default MenuTable;
