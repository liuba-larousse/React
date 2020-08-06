/** @format */

import React, { useState } from 'react';

export default function Search(props) {
  const [search, setSearch] = useState('');
  return (
    <form
      onSubmit={props.search}
      className="form-inline justify-content-center my-4"
    >
      <input
        className="form-control mr-sm-2"
        type="search"
        value={search}
        placeholder="Search"
        aria-label="Search"
        onChange={props.updateSearch}
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
