import React from 'react';
import './input.scss';

const Input = ({ text, setText, creaTextWithDuplicates }) => {
  return (
    <div className="input">
    <div className="input__container">
      <input
        className="input__field"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Text..."
      ></input>
      <button className="input__button" onClick={creaTextWithDuplicates}>
        Click{' '}
      </button>
    </div>
    </div>
  );
};

export default Input;
