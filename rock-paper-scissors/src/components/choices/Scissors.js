import React from "react";
// import images
import scissors from "../../images/scissors.png";
// import css
import "./css/Choice.css";

const Scissors = ({ setUserChoice, getResult, border }) => {
  const setChoice = () => {
    setUserChoice("scissors");
    getResult();
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
