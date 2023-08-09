import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useState } from "react";
import "./Button.css";
function ButtonChangeLights() {
  const [isSunning, setSunning] = useState(true);
  function handleClick() {
    setSunning(!isSunning);
  }
  return (
    <button className="btnlogo" onClick={handleClick}>
      {isSunning ? (
        <WbSunnyIcon className="icon"></WbSunnyIcon>
      ) : (
        <ModeNightIcon className="icon"></ModeNightIcon>
      )}
    </button>
  );
}

export default ButtonChangeLights;
