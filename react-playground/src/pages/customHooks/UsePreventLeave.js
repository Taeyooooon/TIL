import React from 'react';
import { Link } from 'react-router-dom';
import { usePreventLeave } from '../../hooks/usePreventLeave';

const UsePreventLeave = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div>
      <Link to={'/'}>MAIN</Link>
      <h1>USEPREVENTLEAVE</h1>
      <button onClick={enablePrevent}>PROTECT</button>
      <button onClick={disablePrevent}>UNPROTECT</button>
      <div>페이지 이탈 막아줌</div>
    </div>
  );
};

export default UsePreventLeave;
