import { Button, Input } from "@mui/material";
import { useState } from "react";
import SearchIcon from '../icons/search.svg';
import '../App.css'; 


const inputStyle = {
  border: "1px solid black",
};

const SearchTodo = ({ getSearchValue }) => {
  const [value, setValue] = useState("");

  const onSubmit = () => {
    if (value !== "") {
      getSearchValue(value);
    }
  };

  return (
    <div className="search-bar">
          <input
            type="text"
            placeholder="Search note..."
            onChange={(e) => setValue(e.target.value)}
            className="search-input"
          />
                <a className="search-icon" href="#" onClick={() => onSubmit()}>
                  <img  
                    src={SearchIcon}
                    alt="Search Icon"
                  />
                </a>   
        </div>

  );
};

export default SearchTodo;
