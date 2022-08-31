import React, { FC, useEffect, useState, useContext } from 'react';
import { IUser } from '../components/Users/IUser';
import './Users.css';
import { initialUser } from '../components/Users/initialUser';
import AddUserWindow from '../components/Users/AddUserWindow';
import http from '../components/http';
import UserCards from '../components/Users/UserCards';
import Search from '../components/Search';
import { useSearch } from '../hooks/useSearch';
import Context from '../context/context';

const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(initialUser);
  const { openModalLogin } = useContext(Context);

  const deleteUser = async (id: number) => {
    const isDelete = window.confirm('Do you really want to delete user?');
    if (isDelete) {
      const deletedUser = await http.delete(`users/${id}`);
      if (deletedUser.status === 200) {
        setUsers(users.filter((user) => user.id !== id));
      }
    }
  };
  const getUser = async () => {
    try {
      const users = await http.get('users');
      setUsers(users.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const searchedUsers = useSearch(users, 'first_name', 'last_name', search);

  return (
    <>
      {openModal && (
        <AddUserWindow
          openModal={setOpenModal}
          user={user}
          setUser={setUser}
          users={users}
          setUsers={setUsers}
        />
      )}
      <Search
        btnName={'Add new User'}
        field={'Enter Username'}
        setOpenModal={setOpenModal}
        setSearch={setSearch}
      ></Search>
      <UserCards users={searchedUsers} deleteUser={deleteUser}></UserCards>
    </>
  );
};

export default Users;
