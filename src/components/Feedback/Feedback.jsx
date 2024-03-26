import React from "react";

function Feedback({ feedback, totalFeedback, positivePercentage }) {
  const { good, neutral, bad } = feedback;

  return (
    <div>
      <h2>Feedback</h2>
      <p>Total feedbacks: {totalFeedback}</p>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Positive feedback percentage: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;
