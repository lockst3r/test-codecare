import React from 'react';
import './result.scss';

const Result = ({ result }) => {
  return (
    <div className="result">
      <div className="result__container">
        <h1 className="result__title">Result:</h1>
        <ul className="result__list">
          {result.map((el, ind) => (
            <li className="result__item" key={ind}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Result;
