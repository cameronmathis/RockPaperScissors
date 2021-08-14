import React, { useState } from "react";
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
  const [rockBorder, setRockBorder] = useState("4px solid var(--clr-light)");
  const [paperBorder, setPaperBorder] = useState("4px solid var(--clr-light)");
  const [scissorsBorder, setScissorsBorder] = useState(
    "4px solid var(--clr-light)"
  );

  function getCompChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
  }

  function setBorderColor(result, choice) {
    if (result === "win") {
      switch (choice) {
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
      switch (choice) {
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
      switch (choice) {
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

  const getResult = () => {
    const choice = userChoice;
    const compChoice = getCompChoice();
    switch (choice + "-" + compChoice) {
      case "rock-scissors":
      case "paper-rock":
      case "scissors-paper":
        setResult("win");
        setBorderColor("win", choice);
        setUserScore(userScore + 1);
        break;
      case "rock-paper":
      case "paper-scissors":
      case "scissors-rock":
        setResult("lose");
        setBorderColor("lose", choice);
        setCompScore(compScore + 1);
        break;
      default:
        setResult("draw");
        setBorderColor("draw", choice);
    }
  };

  return (
    <div className="game">
      <Rock
        setUserChoice={setUserChoice}
        getResult={getResult}
        border={rockBorder}
      />
      <Paper
        setUserChoice={setUserChoice}
        getResult={getResult}
        border={paperBorder}
      />
      <Scissors
        setUserChoice={setUserChoice}
        getResult={getResult}
        border={scissorsBorder}
      />
    </div>
  );
};

export default Game;
