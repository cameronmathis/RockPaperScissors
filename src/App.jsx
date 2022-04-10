import React, { useState } from "react";

import ActionMessage from "./components/ActionMessage";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import Result from "./components/Result";
import ScoreBoard from "./components/ScoreBoard";

import "./css/App.css";

function App() {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <Header />
      <ScoreBoard userScore={userScore} compScore={compScore} />
      <Result result={result} />
      <Game
        userScore={userScore}
        setUserScore={setUserScore}
        compScore={compScore}
        setCompScore={setCompScore}
        setResult={setResult}
      />
      <ActionMessage />
      <Footer />
    </div>
  );
}

export default App;
