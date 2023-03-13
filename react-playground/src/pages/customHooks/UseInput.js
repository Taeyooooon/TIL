import React from 'react';
import { Link } from 'react-router-dom';
import { useInput } from '../../hooks/useInput';

const UseInput = () => {
  const name = useInput('MR.');

  return (
    <div>
      <Link to={'/'}>MAIN</Link>
      <h1>UseInput</h1>
      <input type='text' placeholder='input' {...name} />
      <div>input Value : {name.value}</div>
    </div>
  );
};

export default UseInput;
