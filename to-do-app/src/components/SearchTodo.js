import { useState } from "react";
import SearchIcon from "../icons/search.svg";
import "../App.css";

const SearchTodo = ({ getSearchValue }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setValue(searchValue);
    getSearchValue(searchValue.trim());
  };

  const handleBackspace = (event) => {
    if (event.key === "Backspace" && value.trim() === "") {
      getSearchValue("");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search note..."
        value={value}
        onChange={handleChange}
        onKeyDown={handleBackspace}
        className="search-input"
      />
      <a
        className="search-icon"
        href="#"
        onClick={() => getSearchValue(value.trim())}
      >
        <img src={SearchIcon} alt="Search Icon" />
      </a>
    </div>
  );
};

export default SearchTodo;
