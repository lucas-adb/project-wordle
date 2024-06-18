import { sample } from "new-component/src/utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { useState } from "react";
import SadBanner from "../SadBanner/SadBanner";
import HappyBanner from "../HappyBanner/HappyBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);

    if (tentativeGuess === answer) {
      setIsCorrect(true);
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} isCorrect={isCorrect} />
      {isCorrect && <HappyBanner numberOfGuesses={guesses.length} />}
      {!isCorrect && guesses.length >= 6 && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
