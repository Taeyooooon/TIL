import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseTabs from './pages/customHooks/UseTabs';
import Main from './pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/usetabs' element={<UseTabs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
