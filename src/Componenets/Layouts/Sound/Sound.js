import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import AdjustSlider from "./AdjustSlider";

export default function SoundIcon(props) {
  const [range, setRange] = useState(80);
  const handleRange = (range)=>{
    setRange(range);
  }
  return (
    <Dropdown>
      <Dropdown.Toggle style={{color: 'rgba(255, 255, 255, 0.921', padding: '0'}} variant="rgba(255, 255, 255, 0.921" id="dropdown-basic">
      <i style={{padding: '0'}} className={`fa-solid fa-${range>0 ? "music" : "volume-xmark"}`}></i>{" "}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <AdjustSlider handleRange={handleRange} />
      </Dropdown.Menu>
    </Dropdown>
  );
}
