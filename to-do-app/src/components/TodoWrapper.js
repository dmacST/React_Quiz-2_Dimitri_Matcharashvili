import React, { useState, useEffect } from "react";
import "../App.css";
import DarkModeIcon from "../icons/dark-mode.svg";
import LightModeIcon from "../icons/light-mode.svg";
import { Todo } from "./Todo";
import SearchTodo from "./SearchTodo";

export const TodoWrapper = ({ todos, deleteTodo }) => {
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    const filtered = todos.filter((todo) =>
      todo.todoInfo.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredTodos(filtered);
  }, [todos, searchText]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const getSearchValue = (string) => {
    setSearchText(string);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = filteredTodos.filter((todo) => todo.id !== id);
    setFilteredTodos(updatedTodos);
    deleteTodo(id);
  };

  return (
    <div className={`TodoWrapper ${darkMode ? "dark-mode" : ""}`}>
      <h1 className="text-main">TODO LIST</h1>
      <div className="header">
        <SearchTodo className="search-bar" getSearchValue={getSearchValue} />
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? (
            <img
              className="dark-light-icon"
              src={LightModeIcon}
              alt="Light Mode"
            />
          ) : (
            <img
              className="dark-light-icon"
              src={DarkModeIcon}
              alt="Dark Mode"
            />
          )}
        </div>
      </div>

      <ul className="TodoList">
        {filteredTodos.map((todo) => (
          <Todo
            task={todo}
            key={todo.id}
            id={todo.id}
            deleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};
