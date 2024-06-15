import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guesses from "../Guesses/Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleSubmitGuesses(tentativeGuesses) {
    const newGuess = { id: crypto.randomUUID(), value: tentativeGuesses };

    setGuesses([...guesses, newGuess]);
  }

  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput guesses={guesses} handleSubmitGuesses={handleSubmitGuesses} />
    </>
  );
}

export default Game;
