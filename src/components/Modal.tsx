import React, { useContext } from 'react';
import Context from '../context/context';
import Registration from './Registration';

const Modal = () => {
  const { openModalLogin, setOpenModalLogin } = useContext(Context);
  return (
    <div
      className={`modal fade ${openModalLogin && 'show d-block'}`}
      tabIndex={1}
    >
      <div className="modal-dialog">
        <div className="modal modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setOpenModalLogin(false)}
            ></button>
          </div>
          <div className="modal-body">
            <Registration />
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
          </div>
        </div>
        <div
          className={`modal-backdrop fade ${openModalLogin && 'show d-block'}`}
        ></div>
      </div>
    </div>
  );
};

export default Modal;
