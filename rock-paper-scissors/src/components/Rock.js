import React from "react";
// import images
import rock from "../images/rock.png";
// import css
import "./css/Choice.css";

function Rock() {
  return (
    <div className="choice choice-rock">
      <img src={rock} alt="" />
    </div>
  );
}

export default Rock;
