import React from "react";


const ResponseDisplay = ({ response, filters }) => {
  return (
    <div className="response-container">
      {filters.includes("numbers") && (
        <p className="response-item">
          <b>Numbers:</b> {response.numbers.join(", ")}
        </p>
      )}
      {filters.includes("alphabets") && (
        <p className="response-item">
          <b>Alphabets:</b> {response.alphabets.join(", ")}
        </p>
      )}
      {filters.includes("highest_alphabet") && (
        <p className="response-item">
          <b>Highest Alphabet:</b> {response.highest_alphabet.join(", ")}
        </p>
      )}
    </div>
  );
};

export default ResponseDisplay;
