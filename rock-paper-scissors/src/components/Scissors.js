import React from "react";
// import images
import scissors from "../images/scissors.png";
// import css
import "./css/Choice.css";

function Scissors() {
  return (
    <div className="choice choice-scissors">
      <img src={scissors} alt="" />
    </div>
  );
}

export default Scissors;
