import React from "react";

function Options({ feedback, updateFeedback }) {
  const handleFeedback = (type) => {
    updateFeedback(type);
  };

  return (
    <div>
      <button onClick={() => handleFeedback("good")}>Good</button>
      <button onClick={() => handleFeedback("neutral")}>Neutral</button>
      <button onClick={() => handleFeedback("bad")}>Bad</button>
      {Object.values(feedback).reduce((total, val) => total + val, 0) > 0 && (
        <button onClick={() => updateFeedback("reset")}>Reset</button>
      )}
    </div>
  );
}

export default Options;
