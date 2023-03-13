import React from 'react';
import { Link } from 'react-router-dom';
import { useClick } from '../../hooks/useClick';

const UseClick = () => {
  const onClick = () => console.log('clicked!');
  const element = useClick(onClick);

  return (
    <div>
      <Link to={'/'}>MAIN</Link>
      <h1 ref={element}>USECLICK</h1>
      <span>⬆️텍스트 클릭 시 콘솔</span>
    </div>
  );
};

export default UseClick;
