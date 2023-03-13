import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseInput from './pages/customHooks/UseInput';
import UseTabs from './pages/customHooks/UseTabs';
import Main from './pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/useinput' element={<UseInput />} />
        <Route path='/usetabs' element={<UseTabs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
