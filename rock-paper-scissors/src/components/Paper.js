import React from "react";
// import images
import paper from "../images/paper.png";
// import css
import "./css/Choice.css";

const Paper = ({ setUserChoice }) => {
  const setChoice = () => {
    setUserChoice("paper");
  };

  return (
    <button onClick={setChoice} className="choice">
      <img src={paper} alt="" />
    </button>
  );
};

export default Paper;
