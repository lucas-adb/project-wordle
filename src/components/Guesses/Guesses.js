import React from "react";

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((g) => (
        <p className="guess" key={g.id}>
          {g.value}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
