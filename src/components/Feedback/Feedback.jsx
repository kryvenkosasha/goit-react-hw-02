import React from "react";

function Feedback({ feedback }) {
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positivePercentage =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

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
