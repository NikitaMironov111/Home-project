import React, { Dispatch, SetStateAction } from 'react';

const Search = ({
  field,
  setSearch,
}: {
  field: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="input-group mb-3 mt-3">
      <span className="input-group-text" id="basic-addon1">
        Search
      </span>
      <input
        type="text"
        className="form-control"
        placeholder={field}
        aria-label="Title"
        aria-describedby="basic-addon1"
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};

export default Search;
