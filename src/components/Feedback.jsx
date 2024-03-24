import React from "react";

function Feedback({ feedback }) {
  const { good, neutral, bad } = feedback;
  return (
    <div>
      <h2>Feedback</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
}

export default Feedback;
