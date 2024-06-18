import React from "react";

function Guess({ guess }) {
  const letters = guess.split("");

  return (
    <p className="guess">
      {letters.map((value, index) => (
        <span className="cell" key={index}>
          {value}
        </span>
      ))}
    </p>
  );
}

export default Guess;
