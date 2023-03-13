import React from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';

const UseTitle = () => {
  const titleUpdater = useTitle('InitialTitle');
  setTimeout(() => titleUpdater('Changed!'), 3000);

  return (
    <div>
      <Link to={'/'}>MAIN</Link>
      <h1>USETITLE</h1>
      <div>3초 뒤 타이틀 바뀜</div>
    </div>
  );
};

export default UseTitle;
