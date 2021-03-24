import React, { useState } from "react";
import "./App.css";
import Colors from "./components/Colors";

function App() {
  const [bgColor, setBgColor] = useState("#1261A0");

  const handleColorChange = (color) => {
    setBgColor(color);
  };
  return (
    <div
      className="App"
      style={{ height: "100vh", width: "100vw", backgroundColor: `${bgColor}` }}
    >
      <h1>Hello World!</h1>
      <label for="colors">Choose a color:</label>
      <Colors handleColorChange={handleColorChange} />
    </div>
  );
}

export default App;
