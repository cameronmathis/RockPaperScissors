import React from "react";

import paper from "../../images/paper.png";

import "./css/Choice.css";

const Paper = ({ getResult, border }) => {
  const setChoice = () => {
    getResult("paper");
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
