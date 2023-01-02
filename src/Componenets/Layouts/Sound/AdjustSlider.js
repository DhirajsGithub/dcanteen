import React from "react";
import { useState } from "react";

export default function AdjustSlider(props) {
  const [range, setRange] = useState(80);
  props.handleRange(range);
  const handleOnChange = (event) => {
    let range = +event.target.value;
    setRange(range);
  };
  return (
    <div
      style={{
        padding: "0 0.5rem",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <i
        onClick={() => {
          setRange(0);
        }}
        style={{ color: "#212529" }}
        className={`fa-solid fa-volume-${range > 0 ? "low" : "xmark"}`}
      ></i>
      <input
        onChange={handleOnChange}
        value={range}
        style={{ width: "5rem", backgroundColor: "red" }}
        type="range"
        name="SoundRange"
        id=""
      />
      <i
        onClick={() => {
          setRange(100);
        }}
        style={{ color: "#212529" }}
        className="fa-solid fa-volume-high"
      ></i>
    </div>
  );
}
