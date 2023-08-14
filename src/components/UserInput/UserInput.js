import React from "react";

function UserInput({ guessesHandler }) {
  const [guess, setGuess] = React.useState("");

  function inputHandler(event) {
    event.preventDefault();
    guessesHandler(guess);
    setGuess(" ");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => inputHandler(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default UserInput;
