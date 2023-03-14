import React from 'react';
import { Link } from 'react-router-dom';
import { useScroll } from '../../hooks/useScroll';

const UseScroll = () => {
  const { y } = useScroll();
  console.log('y : ', y);
  return (
    <div style={{ height: '2000px' }}>
      <Link to={'/'}>MAIN</Link>
      <h1 style={{ position: 'fixed', color: y > 300 ? 'red' : 'blue' }}>USESCROLL</h1>
    </div>
  );
};

export default UseScroll;
