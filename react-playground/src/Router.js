import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseClick from './pages/customHooks/UseClick';
import UseConfirm from './pages/customHooks/UseConfirm';
import UseInput from './pages/customHooks/UseInput';
import UsePreventLeave from './pages/customHooks/UsePreventLeave';
import UseTabs from './pages/customHooks/UseTabs';
import UseTitle from './pages/customHooks/UseTitle';
import Main from './pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/useinput' element={<UseInput />} />
        <Route path='/usetabs' element={<UseTabs />} />
        <Route path='/usetitle' element={<UseTitle />} />
        <Route path='/useclick' element={<UseClick />} />
        <Route path='/useconfirm' element={<UseConfirm />} />
        <Route path='/usepreventleave' element={<UsePreventLeave />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
