import React from "react";
// import images
import rock from "../../images/rock.png";
// import css
import "./css/Choice.css";

const Rock = ({ setUserChoice, getResult }) => {
  const setChoice = () => {
    setUserChoice("rock");
    getResult();
  };

  return (
    <button onClick={setChoice} className="choice">
      <img src={rock} alt="" />
    </button>
  );
};

export default Rock;
