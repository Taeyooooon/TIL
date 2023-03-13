import React from 'react';
import { Link } from 'react-router-dom';
import { useConfirm } from '../../hooks/useConfirm';

const UseConfirm = () => {
  const cb = () => {
    console.log('콘솔찍힘');
  };
  const onClick = useConfirm('확인누르면 콘솔찍힘', cb);

  return (
    <div>
      <Link to={'/'}>MAIN</Link>
      <h1>USECONFIRM</h1>
      <button onClick={onClick}>123123</button>
    </div>
  );
};

export default UseConfirm;
