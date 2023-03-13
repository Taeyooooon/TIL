import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Link to={'/useinput'}>UseInput</Link>
      <br />
      <Link to={'/usetabs'}>UseTabs</Link>
    </div>
  );
};

export default Main;
