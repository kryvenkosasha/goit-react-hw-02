import React from "react";
import "./Options.css";

function Options({ feedback, updateFeedback }) {
  const handleFeedback = (type) => {
    updateFeedback(type);
  };

  return (
    <div className="buttons-container">
      <button className="button" onClick={() => handleFeedback("good")}>Good</button>
      <button className="button" onClick={() => handleFeedback("neutral")}>Neutral</button>
      <button className="button" onClick={() => handleFeedback("bad")}>Bad</button>
      {Object.values(feedback).reduce((total, val) => total + val, 0) > 0 && (
        <button className="button" onClick={() => updateFeedback("reset")}>Reset</button>
      )}
    </div>
  );
}

export default Options;
