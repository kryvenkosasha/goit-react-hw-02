import React, { useState } from 'react';
import Description from './components/Description.jsx';
import Options from './components/Options.jsx';
import Feedback from './components/Feedback.jsx';
import Notification from './components/Notification.jsx';

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = type => {
    if (type === 'reset') {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedback(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
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

