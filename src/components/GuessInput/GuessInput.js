import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    setGuess("");
  }

  function handleGuessInput(event) {
    const guessInput = event.target.value;
    const guessInputUpperCase = guessInput.toUpperCase();
    setGuess(guessInputUpperCase);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleGuessInput}
        pattern="\w{5,5}"
      ></input>
    </form>
  );
}

export default GuessInput;
