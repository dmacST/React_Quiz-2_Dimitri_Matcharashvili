import React, { useState } from "react";

const modalStyle = {
  position: "fixed",
  top: "48%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  height: "400px",
  backgroundColor: "white",
  padding: "20px",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
  zIndex: 1000,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "10px",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1000,
};

const AddTodoModal = ({ open, onClose, addTodo }) => {
  const [value, setValue] = useState("");

  if (!open) return null;

  return (
    <>
      <div style={overlayStyle} onClick={onClose}></div>
      <div style={modalStyle}>
        <h1 style={{ fontWeight: "500" }}>NEW NOTE</h1>
        <input
          className="search-bar"
          type="text"
          placeholder="Input Your Note..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
        />
        <button
          onClick={() => {
            addTodo(value);
            onClose();
            setValue("");
          }}
          style={{
            padding: "10px 20px",
            backgroundColor: "#6C63FF",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          APPLY
        </button>
      </div>
    </>
  );
};

export default AddTodoModal;
