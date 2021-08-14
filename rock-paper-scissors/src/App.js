import React, { useState } from "react";
// import components
import Header from "./components/Header.js";
import ScoreBoard from "./components/ScoreBoard.js";
import Result from "./components/Result.js";
import Choices from "./components/Choices.js";
import ActionMessage from "./components/ActionMessage.js";
import Game from "./services/Game.js";
// import css
import "./css/App.css";

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <Header />
      <ScoreBoard userScore={userScore} compScore={compScore} />
      <Result result={result} />
      <Choices setUserChoice={setUserChoice} />
      <ActionMessage />
      <Game
        userChoice={userChoice}
        userScore={userScore}
        setUserScore={setUserScore}
        compScore={compScore}
        setCompScore={setCompScore}
        setResult={setResult}
      />
    </div>
  );
}

export default App;
