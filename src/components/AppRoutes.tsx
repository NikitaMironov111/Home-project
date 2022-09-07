import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from '../pages/Products';
import Product from '../pages/Product';
import LoginUser from '../pages/LoginUser';
import Context from '../context/context';

const AppRoutes = () => {
  const { isLoginUser } = useContext(Context);

  return isLoginUser ? (
    <Routes>
      <Route path="*" element={<Products></Products>}></Route>
      <Route path="products/:id" element={<Product></Product>}></Route>
      <Route path="personalcabinet" element={<LoginUser></LoginUser>}></Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="products" element={<Products></Products>}></Route>
      <Route path="products/:id" element={<Product></Product>}></Route>
      <Route path="*" element={<Products></Products>}></Route>
    </Routes>
  );
};

export default AppRoutes;
