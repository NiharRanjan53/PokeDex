import React from "react";
import "./Search.css";
import useDebounce from "../../hooks/useDebounce";

const Search = ({ updateSearchTerm }) => {
  const debounceUpdatedSearch = useDebounce((e) =>
    updateSearchTerm(e.target.value)
  );
  return (
    <input
      id="search-pokemon"
      type="text"
      placeholder="Which pokemon you're lookong for?"
      onChange={debounceUpdatedSearch}
    />
  );
};

export default Search;
