import React from 'react';
import { Link } from 'react-router-dom';
import { useFadeIn } from '../../hooks/useFadeIn';

const UseFadeIn = () => {
  const fadeIn1 = useFadeIn(2, 3);
  const fadeIn2 = useFadeIn(5, 1);

  return (
    <div>
      <Link to={'/'}>MAIN</Link>
      <h1 {...fadeIn1}>USEFADEIN 1</h1>
      <h1 {...fadeIn2}>USEFADEIN 2</h1>
    </div>
  );
};

export default UseFadeIn;
