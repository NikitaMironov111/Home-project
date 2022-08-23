import React, { FC, useEffect, useState, useMemo } from 'react';
import { IUser } from './IUser';
import './Users.css';
import { initialUser } from './initialUser';
import ModalWindow from '../ModalWindow/ModalWindow';
import Spinner from '../Spinner/Spinner';
import http from '../http';

const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(initialUser);

  const deleteUser = (id: number) => {
    const isDelete = window.confirm('Do you really want to delete user?');
    if (isDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };
  const getUser = async () => {
    try {
      const users = await http.get('users');
      setUsers(users.data);
      console.log(users);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const searchedUsers = useMemo(() => {
    if (search) {
      return users.filter(
        (user) =>
          user.first_name.toLowerCase().includes(search.toLowerCase()) ||
          user.last_name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return users;
  }, [search, users]);
  return (
    <>
      {openModal && (
        <ModalWindow
          openModal={setOpenModal}
          user={user}
          setUser={setUser}
          users={users}
          setUsers={setUsers}
        />
      )}
      <div className="input-group mb-3">
        <button className="btn btn-success" onClick={() => setOpenModal(true)}>
          Add new User
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {searchedUsers.length ? (
          searchedUsers.map((user) => (
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
    </>
  );
};

export default Users;
