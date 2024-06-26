import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  height: "300px",
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

const buttonContainer = {
  marginTop: "auto",
  display: "flex",
  justifyContent: "space-between",
  width: "95%",
  height: "15%",
};

const AddTodoModal = ({ open, onClose, addTodo }) => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      setErrorMessage("");
    }
  }, [open]);

  const handleSubmit = () => {
    if (value.trim() === "") {
      setErrorMessage("Please type your note");
      return;
    }

    addTodo(value);
    onClose();
    setValue("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  if (!open) return null;

  return (
    <>
      <div style={overlayStyle} onClick={onClose}></div>
      <div style={modalStyle} className="add-todo-modal">
        <h1 style={{ fontWeight: "500" }}>NEW NOTE</h1>
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          placeholder="Input Your Note..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{
            marginBottom: "20px",
            padding: "10px",
            width: "90%",
            fontFamily: "Inter",
            fontSize: "16px",
            border: "2px solid #6C63FF",
            borderRadius: "6px",
          }}
        />
        {errorMessage && (
          <p style={{ color: "red", marginBottom: "10px" }}>{errorMessage}</p>
        )}
        <div style={buttonContainer}>
          <button
            onClick={onClose}
            style={{
              fontFamily: "Kanit",
              fontSize: "18px",
              fontWeight: "500",
              width: "130px",
              padding: "4px 20px",
              backgroundColor: "transparent",
              color: "#6C63FF",
              border: "2px solid #6C63FF",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            CANCEL
          </button>
          <button
            onClick={handleSubmit}
            style={{
              fontFamily: "Kanit",
              fontSize: "18px",
              fontWeight: "500",
              width: "130px",
              padding: "5px 20px",
              backgroundColor: "#6C63FF",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "7px",
            }}
          >
            APPLY
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTodoModal;
