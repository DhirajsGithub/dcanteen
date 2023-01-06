import React, { useEffect, useState } from "react";
import classes from "./MenuTable.module.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { AuthContext } from "../../Store/Api";

const MenuTable = (props) => {
  const menuItem = [
    [
      {
        name: "GRANOLA TRIFLES",
        price: 100,
        imgUrl:
          // "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-18-copyright-240x240.jpg",   describe : "This mini delight turns your regular meal into amazing sensation!"
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-18-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 1,
      },
      {
        name: "CARROT CUPCAKES",
       price: 100,
        imgUrl:
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-19-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 2,
      },
      {
        name: "CREME BRULEE",
        price: 100,
        imgUrl:
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-20-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 3,
      },
      {
        name: "CHOCOLATE CAKE",
       price: 100,
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-21-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 4,
      },
      {
        name: "CHOCOLATE CAKE",
       price: 100,
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-21-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 5,
      },
      {
        name: "CHOCOLATE CAKE",
       price: 100,
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-21-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 6,
      },
    ],
    [
      {
        name: "Beer",
        price: 100,
        imgUrl:
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-22-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 7,
      },
      {
        name: "MILKSHAKES",
        price: 100,
        imgUrl:
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-20-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 8,
      },
      {
        name: "SAKE SPIRTZER",
        price: 100,
        imgUrl:
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/09/drink-5-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 9,
      },
      {
        name: "ICED COFFEE",
       price: 100,
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/09/drink-2-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 10,
      },
      {
        name: "CHOCOLATE CAKE",
       price: 100,
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-21-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 11,
      },
      {
        name: "CHOCOLATE CAKE",
       price: 100,
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-21-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 12,
      },
    ],
    [
      {
        name: "THE TURKEY BURGER",
        price: 100,
        imgUrl:
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-6-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 13,
      },
      {
        name: "SPICY CHICKEN WRAP",
        price: 100,
        imgUrl:
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-8-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 14,
      },
      {
        name: "MASALA HOT DOG",
        price: 100,
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-13-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 15,
      },
      {
        name: "BLACK BUN BURGER",
        price: 100,
        imgUrl:
          "https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-3-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 16,
      },
      {
        name: "CHOCOLATE CAKE",
       price: 100,
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-21-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 17,
      },
      {
        name: "CHOCOLATE CAKE",
       price: 100,
        imgUrl:
          "	https://meals-wheels.themerex.net/wp-content/uploads/2018/06/dish-21-copyright.jpg",
        describe:
          "This mini delight turns your regular meal into amazing sensation!",
        quantity: 1,
        id: 18,
      },
    ],
  ];

  const [item, setItem] = useState({});
  const ctx = useContext(AuthContext);
  console.log(ctx.items);

  const isItemPresent = (item) => {
    ctx.items?.some((i) => {
      return i.id == item.id;
    });
  };

  const handleItem = (item) => {
    setItem(item);
  };

  useEffect(() => {
    let delay = 1000;
    if (Object.keys(item).length >= 1) {
      props.AddToCartBtn(true, item);
      let timeout = setTimeout(() => {
        ctx.handleItemQuantity(item);
        // console.log(isItemPresent());

        props.AddToCartBtn(false, item);
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [item]);

  return (
    <div className={classes.tables}>
      <Row xs={1} lg={4} md={2} className="g-4">
        {menuItem[props.activeMenu.activeMenuId].map((item, index) => {
          return (
            <Col key={index}>
              <Card className={classes.card} bg="dark" text="light">
                <Card.Img
                  className={classes.cardImg}
                  variant="top"
                  src={item.imgUrl}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.describe}</Card.Text>
                  <Button
                    onClick={() => {
                      handleItem(item);
                    }}
                    variant="secondary"
                  >
                    Add to <i className="fa-solid fa-cart-arrow-down"></i>
                  </Button>{" "}
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
