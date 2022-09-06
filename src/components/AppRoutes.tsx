import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Posts from '../pages/Posts';
import Users from '../pages/Users';
import Main from '../pages/Main';
import Context from '../context/context';

const AppRoutes = () => {
  const { isLoginUser } = useContext(Context);

  return isLoginUser ? (
    <Routes>
      <Route path="users" element={<Users></Users>}></Route>
      <Route path="posts" element={<Posts></Posts>}></Route>
      <Route path="main" element={<Main></Main>}></Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="main" element={<Main></Main>}></Route>
    </Routes>
  );
};

export default AppRoutes;
