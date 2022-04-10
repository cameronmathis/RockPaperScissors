import React from "react";

import "./css/ScoreBoard.css";

const ScoreBoard = ({ userScore, compScore }) => {
  return (
    <div className="scoreBoard">
      <div className="badge user__badge">user</div>
      <div className="badge comp__badge">comp</div>
      <span className="score user__score">{userScore}</span>:
      <span className="score comp__score">{compScore}</span>
    </div>
  );
};

export default ScoreBoard;
