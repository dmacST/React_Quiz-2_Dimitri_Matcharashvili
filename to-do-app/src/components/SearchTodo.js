import { Button, Input } from "@mui/material";
import { useState } from "react";

const inputStyle = {
  border: "1px solid black",
};

const SearchTodo = ({ getSearchValue }) => {
  const [value, setValue] = useState("");

  const onSubmit = () => {
    if (value !== "") {
      getSearchValue(value);
    }
  };

  return (
    <div>
      <Input
          type="text"
          value={value}
          placeholder="Search Note..."
          onChange={(e) => setValue(e.target.value)}
          sx={{
            color: "#D0CFE9",
            fontWeight: 'bold',
            border: '1.5px solid #6c63ff', // Add border style
            borderRadius: '4px', // Optionally add border radius for rounded corners
            fontSize: '15px', // Adjust the font size as needed
            paddingLeft: '20px',
          }}
      />

      <Button type="submit" onClick={() => onSubmit()}>
        Search Todo
      </Button>
    </div>
  );
};

export default SearchTodo;
