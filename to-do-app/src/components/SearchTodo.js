import { useState } from "react";
import SearchIcon from "../icons/search.svg";
import "../App.css";

const SearchTodo = ({ getSearchValue }) => {
  const [value, setValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (value.trim() !== "") {
      getSearchValue(value.trim());
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search note..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress} // Call handleKeyPress function on key press
        className="search-input"
      />
      <a className="search-icon" href="#" onClick={onSubmit}>
        <img src={SearchIcon} alt="Search Icon" />
      </a>
    </div>
  );
};

export default SearchTodo;
