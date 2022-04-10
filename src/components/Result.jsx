import React from "react";

import "./css/Result.css";

function getResponse(result) {
  var rslt;
  switch (result) {
    case "win":
      rslt = "You win!";
      break;
    case "lose":
      rslt = "You lose.";
      break;
    default:
      rslt = "Draw!";
  }
  return rslt;
}

const Result = ({ result }) => {
  return (
    <div className="result">
      <p>{getResponse(result)}</p>
    </div>
  );
};

export default Result;
