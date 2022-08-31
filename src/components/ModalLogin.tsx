import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import Context from '../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ModalLogin = () => {
  const { openModalLogin, setOpenModalLogin } = useContext(Context);
  const [showPass, setShowPass] = useState(false);
  const userLogin = 'funny';
  const userPassword = 'qwerty';

  let login = '';
  let password = '';

  const collectLoginData = (event: ChangeEvent<HTMLInputElement>) => {
    login = '';
    password = '';
    if (event.target.id === 'userName') {
      login = event.target.value;
    } else {
      password = event.target.value;
    }
  };
  const access = (event: FormEvent) => {
    event.preventDefault();
    if (login === userLogin && password === userPassword) {
      console.log('Access is Allowed');
      setOpenModalLogin(false);
    } else {
      console.log('Access is Denied');
    }
  };
  return (
    <div
      style={{ backgroundColor: 'RGBA(0, 0, 0, 0.5)' }}
      className={`modal ${openModalLogin && 'd-block'}`}
      tabIndex={-1}
    >
      <form onSubmit={(event) => access(event)}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Log In</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setOpenModalLogin(false)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span
                  style={{ width: '100px' }}
                  className="input-group-text"
                  id="basic-addon1"
                >
                  Username
                </span>
                <input
                  type="text"
                  id="userName"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  required
                  onChange={(event) => collectLoginData(event)}
                />
              </div>
              <div className="input-group mb-3">
                <span
                  style={{ width: '100px' }}
                  className="input-group-text"
                  id="basic-addon1"
                >
                  Password
                </span>
                <input
                  type={showPass ? 'text' : 'password'}
                  id="userPassword"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  required
                  onChange={(event) => collectLoginData(event)}
                />
                <span
                  style={{
                    width: '40px',
                    padding: '0px 10px',
                    cursor: 'pointer',
                  }}
                  className="input-group-text"
                  id="basic-addon1"
                  onClick={() => setShowPass((prev) => !prev)}
                >
                  {showPass ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </span>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setOpenModalLogin(false)}
              >
                Close
              </button>
              <button className="btn btn-primary">Log In</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalLogin;
