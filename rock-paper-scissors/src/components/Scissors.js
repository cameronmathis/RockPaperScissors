import React from "react";
// import images
import scissors from "../images/scissors.png";
// import css
import "./css/Choice.css";

const Scissors = ({ setUserChoice, getResult }) => {
  const setChoice = () => {
    setUserChoice("scissors");
    getResult();
  };

  return (
    <div onClick={setChoice} className="choice">
      <img src={scissors} alt="" />
    </div>
  );
};

export default Scissors;
