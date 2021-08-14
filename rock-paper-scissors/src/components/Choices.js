import React from "react";
// import components
import Rock from "./Rock.js";
import Paper from "./Paper.js";
import Scissors from "./Scissors.js";
// import css
import "./css/Choices.css";

const Choices = ({ setUserChoice }) => {
  const setChoice = (e) => {
    setUserChoice(e.target.dataset.id);
  };

  return (
    <div className="choices">
      <Rock data-id="rock" onClick={setChoice} />
      <Paper data-id="paper" onClick={setChoice} />
      <Scissors data-id="scissors" onClick={setChoice} />
    </div>
  );
};

export default Choices;
