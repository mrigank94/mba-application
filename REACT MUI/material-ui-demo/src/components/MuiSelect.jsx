import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [age, setAge] = useState("");
  return (
    <FormControl fullWidth>
      <InputLabel id="select-demo-label">Age</InputLabel>
      <Select
        id="select-demo"
        label="age"
        labelId="select-demo-label"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MuiSelect;
