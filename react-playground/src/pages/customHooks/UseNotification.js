import React from 'react';
import { Link } from 'react-router-dom';
import { useNotification } from '../../hooks/useNotification';

const UseNotification = () => {
  const fireNotification = useNotification('hi');
  return (
    <div>
      <Link to={'/'}>MAIN</Link>
      <h1>USENOTIFICATION</h1>
      <button onClick={fireNotification}>Notification!!</button>
    </div>
  );
};

export default UseNotification;
