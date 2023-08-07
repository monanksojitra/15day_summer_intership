import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(input).toString();
      setInput(result);
      setHistory((prevHistory) => [
        ...prevHistory,
        { expression: input, result },
      ]);
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };
  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="container calculator-container bg-dark w-25 p-4 rounded-3">
      <div className="calculator">
        <div class="input-group mb-3">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInputGroup1"
              placeholder="Enter Value"
              value={input}
            />
          </div>
        </div>
        <div className="buttons">
          <div className="row">
            <button
              className="col btn btn-secondary m-1"
              onClick={() => handleButtonClick("7")}
            >
              7
            </button>
            <button
              className="col btn btn-secondary m-1"
              onClick={() => handleButtonClick("8")}
            >
              8
            </button>
            <button
              className="col btn btn-secondary m-1"
              onClick={() => handleButtonClick("9")}
            >
              9
            </button>
            <button
              className="col btn btn-primary m-1"
              onClick={() => handleButtonClick("/")}
            >
              ÷
            </button>
          </div>
          <div className="row">
            <button
              className="col btn btn-secondary m-1"
              onClick={() => handleButtonClick("4")}
            >
              4
            </button>
            <button
              className="col btn btn-secondary m-1"
              onClick={() => handleButtonClick("5")}
            >
              5
            </button>
            <button
              className="col btn btn-secondary m-1"
              onClick={() => handleButtonClick("6")}
            >
              6
            </button>
            <button
              className="col btn btn-primary m-1"
              onClick={() => handleButtonClick("*")}
            >
              ×
            </button>
          </div>
          <div className="row">
            <button
              className="col btn btn-secondary m-1"
              onClick={() => handleButtonClick("1")}
            >
              1
            </button>
            <button
              className="col btn btn-secondary m-1"
              onClick={() => handleButtonClick("2")}
            >
              2
            </button>
            <button
              className="col btn btn-secondary m-1"
              onClick={() => handleButtonClick("3")}
            >
              3
            </button>
            <button
              className="col btn btn-primary m-1"
              onClick={() => handleButtonClick("-")}
            >
              -
            </button>
          </div>
          <div className="row">
            <button
              className="col btn btn-secondary m-1"
              onClick={() => handleButtonClick("0")}
            >
              0
            </button>
            <button
              className="col btn btn-secondary m-1"
              onClick={() => handleButtonClick(".")}
            >
              .
            </button>
            <button
              className="col btn btn-success m-1"
              onClick={handleCalculate}
            >
              =
            </button>
            <button
              className="col btn btn-primary m-1"
              onClick={() => handleButtonClick("+")}
            >
              +
            </button>
          </div>
          <div className="row mt-3">
            <button className="col btn btn-danger" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className="result-history">
        <h4>
          Result History{" "}
          {history.length > 0 && (
            <button className="btn btn-sm btn-secondary m-1 p-1" onClick={clearHistory}>
              Clear History
            </button>
          )}
        </h4>
        {history.length === 0 ? (
          <p>No history yet.</p>
        ) : (
          <ul className="list-group">
            {history.map((entry, index) => (
              <li key={index} className="list-group-item">
                <strong>{entry.expression}</strong> = {entry.result}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Calculator;
