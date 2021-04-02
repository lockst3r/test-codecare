import React, { useState } from 'react';
import Input from '../input/Input';
import Result from '../result/Result';
import './main.scss';

const Main = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState([]);

  const creaTextWithDuplicates = () => {
    const lengthOfUniqueText = [...new Set(text)].length;
    const lengthText = text.split('').length;

    if (lengthOfUniqueText < lengthText) {
      setResult(result.concat(text));
    } else {
      alert('You need to enter text there are duplicate letters!!!');
    }
  };

  return (
    <div>
      <Input text={text} setText={setText} creaTextWithDuplicates={creaTextWithDuplicates} />
      <Result result={result} />
    </div>
  );
};

export default Main;
