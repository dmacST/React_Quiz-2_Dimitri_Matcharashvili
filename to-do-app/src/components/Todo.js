import React, { useEffect, useState } from "react";
import { Box, Button, Checkbox, Input, Modal } from "@mui/material";
import EditIcon from "../icons/edit.svg";
import DeleteIcon from "../icons/delete.svg";
import "../App.css";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  color: "red",
  p: 4,
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
              transform: "scale(1.5)", // Increase overall size
              width: "0.75em", // Make checkbox thinner
              height: "1.5em", // Adjust height as needed
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
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Input
              type="text"
              value={editValue}
              placeholder="Edit"
              onChange={(e) => setEditValue(e.target.value)}
            />

            <Button
              type="submit"
              onClick={() => {
                setOpen(false);
                onEditSubmit();
              }}
            >
              Edit todo
            </Button>
          </Box>
        </Modal>
      </div>
    </li>
  );
};
