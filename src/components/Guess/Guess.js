import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const checkedValue = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={`cell ${value && checkedValue[num].status}`}
        >
          {value ? value[num] : " "}
        </span>
      ))}
    </p>
  );
}

export default Guess;
