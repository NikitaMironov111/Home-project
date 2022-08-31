import React, { Dispatch, SetStateAction } from 'react';

const Search = ({
  setOpenModal,
  setSearch,
}: {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="input-group mb-3 mt-3">
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
  );
};

export default Search;
