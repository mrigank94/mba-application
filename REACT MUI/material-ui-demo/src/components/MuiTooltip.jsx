import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

const MuiTooltip = () => {
  return (
    <Tooltip title="Delete" placement="right">
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
};

export default MuiTooltip;
