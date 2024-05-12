import { useState } from "react";
import { TodoWrapper } from "./components/TodoWrapper";
import AddTodoButton from "./components/AddTodo";
import AddTodoModal from "./components/AddTodoModal";
import "./App.scss";

function App() {
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);

  const addTodo = (string) => {
    setTodos([
      ...todos,
      { completed: false, todoInfo: string, id: todos.length },
    ]);
  };

  const searchTodo = (string) => {
    const filteredTodos = todos.filter((item) =>
      item.todoInfo.includes(string)
    );

    setTodos(filteredTodos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  return (
    <div className="App">
      <TodoWrapper
        todos={todos}
        searchTodo={searchTodo}
        deleteTodo={deleteTodo}
      />

      <AddTodoButton handleOpen={handleModalOpen} />

      <AddTodoModal
        open={open}
        onClose={handleModalClose}
        addTodo={addTodo}
        setOpen={setOpen}
      />
    </div>
  );
}

export default App;
