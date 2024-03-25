import React from "react";

function Notification({ feedback }) {
  if (Object.values(feedback).reduce((total, val) => total + val, 0) === 0) {
    return <p>No feedback given yet.</p>;
  }
  return null;
}

export default Notification;
