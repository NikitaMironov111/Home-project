import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import AppRoutes from './AppRoutes';
import Context from '../context/context';
import ModalLogin from './ModalLogin';

function App() {
  const [openModalLogin, setOpenModalLogin] = useState(false);

  return (
    <Context.Provider value={{ openModalLogin, setOpenModalLogin }}>
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
