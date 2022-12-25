import React from "react";
import classes from "./About.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

const About = () => {
  const [abtUsImg, setAbtUsImg] = useState(
    "https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=800"
  );

  const images = [
    "https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://media.istockphoto.com/id/1358406303/photo/close-up-image-of-sliced-pepperoni-pizza-on-round-wooden-chopping-board-and-margherita-on.jpg?b=1&s=170667a&w=0&k=20&c=SU6-JdNUl3rW317WYJ46U6y9pqKmNAA4RuKoLNJMNwI=",
    "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.pexels.com/photos/2323182/pexels-photo-2323182.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1990025/pexels-photo-1990025.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
  ];

  const randomNo = useCallback (function(){
    const number = parseInt(Math.random()*10 % images.length)
    return number
  }, [])
console.log(abtUsImg)
  useEffect(() => {
    const interval = setInterval(() => {
      setAbtUsImg(images[randomNo()]);
    }, 4000);
    
    return ()=> clearInterval(interval);
  }, [abtUsImg, randomNo]);

  return (
    <div className={classes.about}>
      <Row>
        <Col md={12} sm={12} lg={6}>
          <div className={classes.img}>
            <img
              src={abtUsImg}
              alt="Image describing food"
            />
          </div>
        </Col>
        <Col md={12} sm={12} lg={6}>
          <div className={classes.contain}>
            <h1>About us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur, quisquam accusantium nostrum modi, nemo, officia
              veritatis ipsum facere maxime assumenda voluptatum enim! Labore
              maiores placeat impedit, vero sed est voluptas!Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Expedita alias dicta
              autem, maiores doloremque quo
              <br /> <br />
              perferendis, ut obcaecati harum, Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Eum necessitatibus iste, nulla
              recusandae porro minus nemo eaque cum repudiandae quidem voluptate
              magnam voluptatum? Nobis, saepe sapiente omnis qui eligendi
              pariatur. quis voluptas. Assumenda facere adipisci quaerat. Illum
              doloremque
              <br />
              <br />
              quae omnis vitae. Lonsectetur adipisicing elit. Blanditiis
              aspernatur, ratione dolore vero asperiores explicabo. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Eos ab itaque modi,
              reprehenderit fugit soluta, molestias optio repellat incidunt iure
              sed deserunt nemo magnam rem explicabo vitae. Cum, nostrum,
              quidem.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
