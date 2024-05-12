import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const buttonStyle = {
  position: "fixed",
  bottom: "5%",
  right: "5%",
  borderRadius: "100%",
  height: "60px", 
  width: "60px", 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#6C63FF",
  cursor: "pointer",
};

const iconStyle = {
  fontSize: "30px",
  color: "#F7F7F7",
};

const AddTodoButton = ({ handleOpen }) => {
  return (
    <Button variant="contained" style={buttonStyle} onClick={handleOpen}>
      <AddIcon style={iconStyle} />
    </Button>
  );
};

export default AddTodoButton;
