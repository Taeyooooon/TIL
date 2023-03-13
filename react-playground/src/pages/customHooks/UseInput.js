import React from 'react';
import { useInput } from '../../hooks/useInput';

const UseInput = () => {
  const name = useInput('MR.');
  
  return (
    <div>
      <input type='text' placeholder='input' {...name} />
      <div>input Value : {name.value}</div>
    </div>
  );
};

export default UseInput;
