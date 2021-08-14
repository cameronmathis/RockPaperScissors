import React from "react";
// import images
import rock from "../images/rock.png";
// import css
import "./css/Choice.css";

const Rock = ({ setUserChoice }) => {
  const setChoice = () => {
    setUserChoice("rock");
  };

  return (
    <button onClick={setChoice} className="choice">
      <img src={rock} alt="" />
    </button>
  );
};

export default Rock;
