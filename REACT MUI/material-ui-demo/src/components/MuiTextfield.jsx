import { Stack, TextField } from "@mui/material";

const MuiTextfield = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Name" variant="outlined" autoComplete="off" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
    </Stack>
  );
};

export default MuiTextfield;
