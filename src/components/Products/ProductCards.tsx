import React from 'react';
import Spinner from '../Spinner/Spinner';
import { IUser } from './IProduct';

const UserCards = ({
  users,
  deleteUser,
}: {
  users: IUser[];
  deleteUser: (id: number) => void;
}) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {users.length ? (
        users.map((user) => (
          <div className="col" key={user.id}>
            <div className="card">
              <img src={user.avatar} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{`#${user.id} - ${user.first_name} ${user.last_name}`}</h5>
                <p className="card-text">E-mail: {user.email}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete User
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default UserCards;
