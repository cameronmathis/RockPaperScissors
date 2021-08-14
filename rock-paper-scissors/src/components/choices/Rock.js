import React from "react";
// import images
import rock from "../../images/rock.png";
// import css
import "./css/Choice.css";

const Rock = ({ getResult, border }) => {
  const setChoice = () => {
    getResult("rock");
  };

  const styles = {
    border: border,
  };

  return (
    <div onClick={setChoice} className="choice" style={styles}>
      <img src={rock} alt="" />
    </div>
  );
};

export default Rock;
