import React, { ChangeEvent, FormEvent } from 'react';
import { IUser } from './IUser';
import { initialUser } from './initialUser';
import http from '../http';

interface AddUserWindowProps {
  openModal: any;
  user: object;
  setUser: any;
  users: any;
  setUsers: any;
}
const AddUserWindow = ({
  openModal,
  user,
  setUser,
  users,
  setUsers,
}: AddUserWindowProps) => {
  const onChangeUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.id;
    setUser({ ...user, [field]: event.target.value });
  };

  const addUser = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const addedUser = await http.post('users', user);
      if (addedUser.data) {
        setUsers([...users, user]);
        setUser(initialUser);
      }
    } catch (e) {
      console.log(e);
    }
    openModal(false);
  };
  return (
    <div className="modal_window">
      <div className="input_container">
        <h2>ADD NEW USER</h2>
        <div className="input_group">
          <form onSubmit={(event) => addUser(event)}>
            {Object.keys(user).map((field) => {
              let userField = field;
              if (field === 'id') return;
              else if (field == 'email') {
                userField = 'E-Mail';
              } else if (field == 'first_name') {
                userField = 'First Name';
              } else if (field == 'last_name') {
                userField = 'Last Name';
              } else {
                userField = 'Avatart URL';
              }
              return (
                <div className="mb-3" key={field}>
                  <label htmlFor={field} className="form-label">
                    {userField}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={field}
                    required
                    value={
                      user[
                        field as keyof Omit<
                          IUser,
                          'id' | 'email' | 'first_name' | 'last_name' | 'avatar'
                        >
                      ]
                    }
                    onChange={(event) => onChangeUserData(event)}
                  />
                </div>
              );
            })}
            <button className="btn btn-success mx-5 mb-2">Add User</button>
            <button
              className="btn btn-danger mx-5"
              onClick={() => openModal(false)}
            >
              Close window
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserWindow;
