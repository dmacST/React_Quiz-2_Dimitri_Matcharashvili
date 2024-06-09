import React, { useEffect, useState } from "react";
import { Checkbox, Input, Modal } from "@mui/material";
import EditIcon from "../icons/edit.svg";
import DeleteIcon from "../icons/delete.svg";
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

export const Todo = ({ task, deleteTodo, id }) => {
  const [checked, setChecked] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setChecked(task.completed);
    setEditValue(task.todoInfo);
  }, [task.todoInfo]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const label = { inputProps: { "aria-label": task.todoInfo } };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    task.completed = !checked;
  };

  const onEditSubmit = () => {
    task.todoInfo = editValue;
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setOpen(false);
      onEditSubmit();
    }
  };

  return (
    <li style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Checkbox
          {...label}
          checked={checked}
          onChange={handleChange}
          sx={{
            color: "#6C63FF",
            "&.Mui-checked": { color: "#6C63FF" },
            "& .MuiSvgIcon-root": {
              transform: "scale(1.5)",
              height: "1.5em",
            },
          }}
        />

        <p
          className={`task ${checked ? "completed" : ""}`}
          style={{
            flexGrow: 1,
            textAlign: "left",
            margin: "0 10px",
            fontSize: "25px",
          }}
        >
          {task.todoInfo}
        </p>

        <a className="edit-icon" href="#" onClick={handleOpen}>
          <img src={EditIcon} alt="Edit Icon" />
        </a>

        <a className="delete-icon" href="#" onClick={() => deleteTodo(id)}>
          <img src={DeleteIcon} alt="Delete Icon" />
        </a>

        <Modal
          style={overlayStyle}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div style={modalStyle} className="add-todo-modal">
            <h1 style={{ fontWeight: "500" }}>EDIT NOTE</h1>

            <input
              className="search-input"
              type="text"
              value={editValue}
              placeholder="Edit"
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleKeyDown} // Listen for Enter key press
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

            <div style={buttonContainer}>
              <button
                onClick={handleClose} // Close modal on click
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
                onClick={() => {
                  setOpen(false);
                  onEditSubmit();
                }}
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
        </Modal>
      </div>
    </li>
  );
};
