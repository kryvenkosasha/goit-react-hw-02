import React, { useState, useEffect } from "react";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    return savedFeedback || { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    if (type === "reset") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedback((prevState) => ({
        ...prevState,
        [type]: prevState[type] + 1,
      }));
    }
  };

  return (
    <div className="App">
      <Description />
      <Options feedback={feedback} updateFeedback={updateFeedback} />
      {Object.values(feedback).reduce((total, val) => total + val, 0) > 0 && (
        <Feedback feedback={feedback} />
      )}
      <Notification feedback={feedback} />
    </div>
  );
}

export default App;
