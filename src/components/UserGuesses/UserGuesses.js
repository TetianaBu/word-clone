import React from "react";

function UserGuesses({ words }) {
  return (
    <div className="guess-results">
      {words.map((word, index) => (
        <p className="guess" key={index}>
          {word}
        </p>
      ))}
    </div>
  );
}

export default UserGuesses;
