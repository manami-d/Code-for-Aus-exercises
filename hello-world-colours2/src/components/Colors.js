import React from "react";

const colorsObj = {
  blue: "#1261A0",
  red: "#cf513d",
  yellow: "#ffe800",
  green: "#acdf87",
  pink: "#fbd2d7",
};

const Colors = ({ handleColorChange }) => {
  const colorList = Object.keys(colorsObj).map((color, index) => {
    return (
      <option key={index} value={color}>
        {color}
      </option>
    );
  });
  return (
    <select
      onChange={(e) => handleColorChange(colorsObj[e.target.value])}
      name="colors"
      id="colors"
    >
      {colorList}
    </select>
  );
};

export default Colors;
