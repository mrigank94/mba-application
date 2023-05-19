import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const MuiRadioButton = () => {
  return (
    <FormControl>
      <FormLabel id="group-label">Gender</FormLabel>
      <RadioGroup defaultValue={"female"} row>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
};

export default MuiRadioButton;
