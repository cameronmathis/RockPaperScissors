import React, { useState } from "react";

import Paper from "./choices/Paper.jsx";
import Rock from "./choices/Rock.jsx";
import Scissors from "./choices/Scissors.jsx";

import "./css/Game.css";

const Game = ({
  userScore,
  setUserScore,
  compScore,
  setCompScore,
  setResult,
}) => {
  const [rockBorder, setRockBorder] = useState("4px solid var(--clr-light)");
  const [paperBorder, setPaperBorder] = useState("4px solid var(--clr-light)");
  const [scissorsBorder, setScissorsBorder] = useState(
    "4px solid var(--clr-light)"
  );

  function getCompChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
  }

  function setBorderColor(result, userChoice) {
    if (result === "win") {
      switch (userChoice) {
        case "rock": {
          setRockBorder("4px solid var(--clr-accent-light)");
          setTimeout(() => setRockBorder("4px solid var(--clr-light)"), 500);
          break;
        }
        case "paper": {
          setPaperBorder("4px solid var(--clr-accent-light)");
          setTimeout(() => setPaperBorder("4px solid var(--clr-light)"), 500);
          break;
        }
        default: {
          setScissorsBorder("4px solid var(--clr-accent-light)");
          setTimeout(
            () => setScissorsBorder("4px solid var(--clr-light)"),
            500
          );
          break;
        }
      }
    } else if (result === "lose") {
      switch (userChoice) {
        case "rock": {
          setRockBorder("4px solid var(--clr-dark)");
          setTimeout(() => setRockBorder("4px solid var(--clr-light)"), 500);
          break;
        }
        case "paper": {
          setPaperBorder("4px solid var(--clr-dark)");
          setTimeout(() => setPaperBorder("4px solid var(--clr-light)"), 500);
          break;
        }
        default: {
          setScissorsBorder("4px solid var(--clr-dark)");
          setTimeout(
            () => setScissorsBorder("4px solid var(--clr-light)"),
            500
          );
          break;
        }
      }
    } else {
      switch (userChoice) {
        case "rock": {
          setRockBorder("4px solid #464647");
          setTimeout(() => setRockBorder("4px solid var(--clr-light)"), 500);
          break;
        }
        case "paper": {
          setPaperBorder("4px solid #464647");
          setTimeout(() => setPaperBorder("4px solid var(--clr-light)"), 500);
          break;
        }
        default: {
          setScissorsBorder("4px solid #464647");
          setTimeout(
            () => setScissorsBorder("4px solid var(--clr-light)"),
            500
          );
          break;
        }
      }
    }
  }

  const getResult = (userChoice) => {
    const compChoice = getCompChoice();
    switch (userChoice + "-" + compChoice) {
      case "rock-scissors":
      case "paper-rock":
      case "scissors-paper":
        setResult("win");
        setBorderColor("win", userChoice);
        setUserScore(userScore + 1);
        break;
      case "rock-paper":
      case "paper-scissors":
      case "scissors-rock":
        setResult("lose");
        setBorderColor("lose", userChoice);
        setCompScore(compScore + 1);
        break;
      default:
        setResult("draw");
        setBorderColor("draw", userChoice);
    }
  };

  return (
    <div className="game">
      <Rock getResult={getResult} border={rockBorder} />
      <Paper getResult={getResult} border={paperBorder} />
      <Scissors getResult={getResult} border={scissorsBorder} />
    </div>
  );
};

export default Game;
