import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Posts from '../pages/Posts';
import Users from '../pages/Users';
import Main from '../pages/Main';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="users" element={<Users></Users>}></Route>
      <Route path="posts" element={<Posts></Posts>}></Route>
      <Route path="main" element={<Main></Main>}></Route>
    </Routes>
  );
};

export default AppRoutes;
