import React from "react";

function UserGuesses({ words }) {
  return (
    <div className="guess-results">
      {words.map((word) => (
        <p className="guess" key={Math.random()}>{word}</p>
        ))}
    </div>
  );
}

export default UserGuesses;
