import React, { useState } from "react";
import "./App.css";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "10 + 20 = ?",
      options: [
        { id: 0, text: "10", isCorrect: false },
        { id: 1, text: "25", isCorrect: false },
        { id: 2, text: "30", isCorrect: true },
        { id: 3, text: "35", isCorrect: false },
      ],
    },
    {
      text: "50 - 10 = ?",
      options: [
        { id: 0, text: "10", isCorrect: false },
        { id: 1, text: "20", isCorrect: false },
        { id: 2, text: "30", isCorrect: false },
        { id: 3, text: "40", isCorrect: true },
      ],
    },
    {
      text: "5 x 5 = ?",
      options: [
        { id: 0, text: "15", isCorrect: false },
        { id: 1, text: "20", isCorrect: false },
        { id: 2, text: "25", isCorrect: true },
        { id: 3, text: "35", isCorrect: false },
      ],
    },
    {
      text: "10 / 2 = ?",
      options: [
        { id: 0, text: "5", isCorrect: true },
        { id: 1, text: "10", isCorrect: false },
        { id: 2, text: "15", isCorrect: false },
        { id: 3, text: "20", isCorrect: false },
      ],
    },
  ];

  // Help Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Let's answer question.</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
