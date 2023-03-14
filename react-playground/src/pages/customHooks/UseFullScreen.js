import React from 'react';
import { Link } from 'react-router-dom';
import { useFullScreen } from '../../hooks/useFullScreen';

const UseFullScreen = () => {
  const { ref, triggerFull, exitFull } = useFullScreen();

  return (
    <div>
      <Link to={'/'}>MAIN</Link>
      <h1>USEFULLSCREEN</h1>
      <div ref={ref}>
        <img src='https://i.ibb.co/R6RwNxx/grape.jpg' alt='grape' width='250' />
        <button onClick={exitFull}>Exit FullScreen</button>
      </div>
      <button onClick={triggerFull}>Go FullScreen</button>
    </div>
  );
};

export default UseFullScreen;
