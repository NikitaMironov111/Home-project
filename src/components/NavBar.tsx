import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';
const NavBar = () => {
  const { setOpenModalLogin } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="users">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="posts">
              Posts
            </Link>
          </li>
        </ul>
        <button
          className="btn btn-success"
          onClick={() => setOpenModalLogin(true)}
        >
          Log In
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
