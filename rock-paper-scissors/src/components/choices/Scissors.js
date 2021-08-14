import React from "react";
// import images
import scissors from "../../images/scissors.png";
// import css
import "./css/Choice.css";

const Scissors = ({ getResult, border }) => {
  const setChoice = () => {
    getResult("scissors");
  };

  const styles = {
    border: border,
  };

  return (
    <div onClick={setChoice} className="choice" style={styles}>
      <img src={scissors} alt="" />
    </div>
  );
};

export default Scissors;
