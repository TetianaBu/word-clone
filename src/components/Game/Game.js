import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import UserInput from "../UserInput/UserInput";
import UserGuesses from "../UserGuesses/UserGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = React.useState([]);

  return (
    <>
      <UserGuesses  words={words}/>
      <UserInput words={words} setWords={setWords} />
    </>
  );
}

export default Game;
