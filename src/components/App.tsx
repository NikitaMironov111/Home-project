import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './NavBar';
import AppRoutes from './AppRoutes';
import Context from '../context/context';
import ModalLogin from './Modal';

function App() {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [isLoginUser, setIsLoginUser] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoginUser(true);
    }
  }, []);

  return (
    <Context.Provider
      value={{ openModalLogin, setOpenModalLogin, isLoginUser, setIsLoginUser }}
    >
      <div className="App">
        <ModalLogin />
        <header className="App-header">
          <NavBar></NavBar>
        </header>
        <div className="container">
          <AppRoutes></AppRoutes>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
