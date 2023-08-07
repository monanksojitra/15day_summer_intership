import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      index: 1,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      index: 2,
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Mars", "Saturn", "Venus"],
      answer: "Jupiter",
    },
    {
      index: 3,
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["Japan", "China", "South Korea", "Thailand"],
      answer: "Japan",
    },
    {
      index: 4,
      question: "What is the currency of Brazil?",
      options: ["Real", "Peso", "Dollar", "Rupee"],
      answer: "Real",
    },
    {
      index: 5,
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Michelangelo",
      ],
      answer: "Leonardo da Vinci",
    },
    {
      index: 6,
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Carbon Monoxide", "Oxygen", "Nitrogen", "Carbon Dioxide"],
      answer: "Carbon Dioxide",
    },
    {
      index: 7,
      question: "Which country is famous for its pyramids?",
      options: ["Greece", "Egypt", "India", "Mexico"],
      answer: "Egypt",
    },
    {
      index: 8,
      question: "What is the currency of Japan?",
      options: ["Yen", "Euro", "Dollar", "Pound"],
      answer: "Yen",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 10);
    } else {
      setScore((prevScore) => Math.max(prevScore - 10, 0));
    }

    setSelectedOption("");
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption("");
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="container quiz-container">
      <div className="quiz">
        {quizCompleted ? (
          <div className="result">
            <h2>Congratulations!</h2>
            <p>You scored: {score} points</p>
            <button className="btn btn-primary" onClick={handleResetQuiz}>
              Start Again
            </button>
          </div>
        ) : (
          <>
            <div className="score-box">
              <h4>Score: {score}</h4>
            </div>
            {currentQuestionIndex < questions.length ? (
              <>
                <h2 className="question">
                  {questions[currentQuestionIndex].index +
                    "." +
                    questions[currentQuestionIndex].question}
                </h2>
                <div className="options">
                  {questions[currentQuestionIndex].options.map(
                    (option, index) => (
                      <div
                        key={index}
                        className={`form-check ${
                          selectedOption === option
                            ? option === questions[currentQuestionIndex].answer
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                            : ""
                        }`}
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="quizOption"
                          id={`option${index}`}
                          value={option}
                          checked={selectedOption === option}
                          onChange={() => handleOptionChange(option)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`option${index}`}
                        >
                          {option}
                        </label>
                      </div>
                    )
                  )}
                </div>
                <button
                  className="btn btn-primary mt-3"
                  onClick={handleNextQuestion}
                >
                  Next
                </button>
              </>
            ) : (
              <div className="result">
                <h2>Quiz Completed!</h2>
                <p>Your final score: {score} points</p>
                <button className="btn btn-primary" onClick={handleResetQuiz}>
                  Start Again
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
