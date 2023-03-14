import React from 'react';
import { Link } from 'react-router-dom';
import { useBeforeLeave } from '../../hooks/useBeforeLeave';

const UseBeforeLeave = () => {
  useBeforeLeave();
  return (
    <div>
      <Link to={'/'}>MAIN</Link>
      <h1>USEBEFORELEAVE</h1>
      <div>마우스 화면 나가면 콘솔</div>
    </div>
  );
};

export default UseBeforeLeave;
