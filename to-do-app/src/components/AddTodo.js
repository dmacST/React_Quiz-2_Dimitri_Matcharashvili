import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import AddButtonIcon from "../icons/add-button.svg";

const AddTodoButton = ({ handleOpen }) => {
  return (
    <a className="add-button" href="#" onClick={handleOpen}>
      <img
        src={AddButtonIcon}
        alt="Add Button Icon"
        className="add-button-icon"
      />
    </a>
  );
};

export default AddTodoButton;
