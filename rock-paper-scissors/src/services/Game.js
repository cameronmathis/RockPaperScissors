import React from "react";

const Game = ({
  userChoice,
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

  return <div>{getResult}</div>;
};

export default Game;
