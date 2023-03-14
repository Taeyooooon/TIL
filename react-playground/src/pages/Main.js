import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Link to={'/useinput'}>UseInput</Link>
      <br />
      <Link to={'/usetabs'}>UseTabs</Link>
      <br />
      <Link to={'/usetitle'}>UseTitle</Link>
      <br />
      <Link to={'/useclick'}>UseClick</Link>
      <br />
      <Link to={'/useconfirm'}>UseConfirm</Link>
      <br />
      <Link to={'/usepreventleave'}>UsePreventLeave</Link>
      <br />
      <Link to={'/usebeforeleave'}>UseBeforeLeave</Link>
    </div>
  );
};

export default Main;
