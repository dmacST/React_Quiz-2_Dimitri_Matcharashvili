import React from "react";
import { Todo } from "./Todo";
import SearchTodo from "./SearchTodo";

export const TodoWrapper = ({ todos, searchTodo, deleteTodo }) => {
  const getSearchValue = (string) => {
    searchTodo(string);
  };

  return (
    <div className="TodoWrapper">
      <h1>TODO LIST</h1>

      <SearchTodo getSearchValue={getSearchValue} />
      <ul>
        {todos?.map((todo) => (
          <Todo
            task={todo}
            key={todo.id}
            id={todo.id}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      
    </div>
  );
};
