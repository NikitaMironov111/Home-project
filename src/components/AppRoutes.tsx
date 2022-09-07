import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from '../pages/Products';
import LoginUser from '../pages/LoginUser'
import Context from '../context/context';

const AppRoutes = () => {
  const { isLoginUser } = useContext(Context);

  return isLoginUser ? (
    <Routes>
      <Route path="products" element={<Products></Products>}></Route>
      <Route path="personalcabinet" element={<LoginUser></LoginUser>}></Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="products" element={<Products></Products>}></Route>
    </Routes>
  );
};

export default AppRoutes;
