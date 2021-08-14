import React from "react";
// import components
import Rock from "./Rock.js";
import Paper from "./Paper.js";
import Scissors from "./Scissors.js";
// import css
import "./css/Choices.css";

const Choices = ({ setUserChoice }) => {
  return (
    <div className="choices">
      <Rock setUserChoice={setUserChoice} />
      <Paper setUserChoice={setUserChoice} />
      <Scissors setUserChoice={setUserChoice} />
    </div>
  );
};

export default Choices;
