import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReviewCard from './ReviewCard'
import classes from './Review.module.css'


const Review = () => {
  const reviews = [
    {
      name: "Mike Jakson",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime commodi vitae illo nihil dolores dolorem possimus reiciendis eius omnis deleniti.",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      id: 1,
    },
    {
      name: "Mike Jakson",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime commodi vitae illo nihil dolores dolorem possimus reiciendis eius omnis deleniti.",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      id: 2,
    },
    {
      name: "Mike Jakson",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime commodi vitae illo nihil dolores dolorem possimus reiciendis eius omnis deleniti.",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      id: 3,
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <h1>Testimonials</h1>
  );
};

export default Review;
 