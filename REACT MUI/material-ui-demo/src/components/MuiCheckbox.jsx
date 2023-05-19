import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const MuiCheckbox = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Cricket" />
      <FormControlLabel control={<Checkbox />} label="Swimming" />
      <FormControlLabel control={<Checkbox />} label="Singing" />
      <FormControlLabel disabled control={<Checkbox />} label="Dancing" />
    </FormGroup>
  );
};

export default MuiCheckbox;
