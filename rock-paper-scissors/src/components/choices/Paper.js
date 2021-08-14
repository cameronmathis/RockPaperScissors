import React from "react";
// import images
import paper from "../../images/paper.png";
// import css
import "./css/Choice.css";

const Paper = ({ setUserChoice, getResult }) => {
  const setChoice = () => {
    setUserChoice("paper");
    getResult();
  };

  return (
    <button onClick={setChoice} className="choice">
      <img src={paper} alt="" />
    </button>
  );
};

export default Paper;
