import React, { useEffect, useState } from "react";
import { Box, Button, Checkbox, Input, Modal } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const deleteIconStyle = {
  cursor: "pointer",
};

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
        className="Todo"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Checkbox
          {...label}
          checked={checked}
          onChange={handleChange}
          sx={{ color: "#6C63FF", "&.Mui-checked": { color: "#6C63FF" } }}
        />

        <p
          className={`${task.completed ? "completed" : ""}`}
          onClick={handleOpen}
        >
          {task.todoInfo}
        </p>
        <DeleteIcon onClick={() => deleteTodo(id)} classes={deleteIconStyle} />

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
              placeholder="editTodo"
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
