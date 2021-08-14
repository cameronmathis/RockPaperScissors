import React from "react";
// import images
import paper from "../../images/paper.png";
// import css
import "./css/Choice.css";

const Paper = ({ setUserChoice, getResult, border }) => {
  const setChoice = () => {
    setUserChoice("paper");
    getResult();
  };

  const styles = {
    border: border,
  };

  return (
    <div onClick={setChoice} className="choice" style={styles}>
      <img src={paper} alt="" />
    </div>
  );
};

export default Paper;
