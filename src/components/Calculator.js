// src/components/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  const backspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      // Remove underscores before evaluating
      const sanitizedInput = input.replace(/_/g, '');
      setResult(eval(sanitizedInput)); // eslint-disable-line no-eval
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <h1>ReactJS Calculator</h1>
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {'123+456-789*0./_'.split('').map((char, index) => (
          <button key={index} onClick={() => handleClick(char)}>
            {char}
          </button>
        ))}
        <button onClick={calculate}>=</button>
        <button onClick={backspace}>⌫</button>
        <button onClick={clear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
