import React, { Dispatch, SetStateAction } from 'react';

const Search = ({
  field,
  btnName,
  setOpenModal,
  setSearch,
}: {
  field: string;
  btnName: string;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="input-group mb-3 mt-3">
      <button className="btn btn-success" onClick={() => setOpenModal(true)}>
        {btnName}
      </button>
      <input
        type="text"
        className="form-control"
        placeholder={field}
        aria-label="Username"
        aria-describedby="basic-addon1"
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};

export default Search;
