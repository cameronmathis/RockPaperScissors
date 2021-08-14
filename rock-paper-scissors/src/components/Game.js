import React from "react";
// import components
import Rock from "./choices/Rock.js";
import Paper from "./choices/Paper.js";
import Scissors from "./choices/Scissors.js";
// import css
import "./css/Game.css";

const Game = ({
  userChoice,
  setUserChoice,
  userScore,
  setUserScore,
  compScore,
  setCompScore,
  setResult,
}) => {
  function getCompChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
  }

  const getResult = () => {
    const compChoice = getCompChoice();
    switch (userChoice + "-" + compChoice) {
      case "rock-scissors":
      case "paper-rock":
      case "scissors-paper":
        setResult("win");
        setUserScore(userScore + 1);
        break;
      case "rock-paper":
      case "paper-scissors":
      case "scissors-rock":
        setResult("lose");
        setCompScore(compScore + 1);
        break;
      default:
        setResult("draw");
    }
  };

  return (
    <div className="game">
      <Rock setUserChoice={setUserChoice} getResult={getResult} />
      <Paper setUserChoice={setUserChoice} getResult={getResult} />
      <Scissors setUserChoice={setUserChoice} getResult={getResult} />
    </div>
  );
};

export default Game;
