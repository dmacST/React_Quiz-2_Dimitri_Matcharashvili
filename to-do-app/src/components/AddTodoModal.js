import { Box, Button, Input, Modal } from "@mui/material";
import React, { useState } from "react";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
};

const AddTodoModal = ({ open, onClose, addTodo, setOpen }) => {
  const [value, setValue] = useState("");

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Input
          type="text"
          placeholder="Add Todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          type="submit"
          onClick={(e) => {
            addTodo(value);
            setOpen(false);
            setValue("");
          }}
        >
          Add Todo
        </Button>
      </Box>
    </Modal>
  );
};

export default AddTodoModal;
