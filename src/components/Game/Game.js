import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import UserInput from "../UserInput/UserInput";
import UserGuesses from "../UserGuesses/UserGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import LostBanner from "../LostBanner";
import WonBanner from "../WonBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = React.useState([]);

  const [gameStatus, setGameStatus] = React.useState("running");

  function guessesHandler(guess) {
    const nextWords = [...words, guess];
    setWords(nextWords);
    if (guess === answer) {
      setGameStatus("won");
    } else if (nextWords.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <UserGuesses words={words} answer={answer} />
      <UserInput guessesHandler={guessesHandler} gameStatus={gameStatus} />
      {gameStatus === "won" && <WonBanner numOfGuesses={words.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
