import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guesses from "../Guesses/Guesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState(
    range(NUM_OF_GUESSES_ALLOWED).map((w) => "     ")
  );
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);

  function handleSubmitGuesses(tentativeGuesses) {
    if (numberOfGuesses >= NUM_OF_GUESSES_ALLOWED) return;

    const newGuesses = [...guesses];
    newGuesses[numberOfGuesses] = tentativeGuesses;
    setGuesses(newGuesses);
    setNumberOfGuesses(numberOfGuesses + 1);
  }

  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput guesses={guesses} handleSubmitGuesses={handleSubmitGuesses} />
    </>
  );
}

export default Game;
