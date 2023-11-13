import React, { useState, useCallback } from "react";
import logo from "../img/Reddit-Logo-PNG5.png";
import { IoSearch } from "react-icons/io5";

function Search(props) {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const searchTerm = useCallback(() => {
    props.onSearch(term);
  }, [props, term]);

  return (
    <div className="bg-gray w-full h-20   ">
      <img src={logo} alt="logo" className="w-20 h-11 ml-32" />
      <div className="m-auto">
        <IoSearch className="searchIcon" onClick={searchTerm} />
        <input
          className="searchInput"
          type="text"
          placeholder="Type here for search"
          onChange={handleTermChange}
        />
      </div>
    </div>
  );
}

export default Search;
