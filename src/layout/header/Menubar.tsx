import { Typography } from "@mui/material";

export const Menubar = () => {
  return (
    <>
        <Typography
      variant="body1"
      color="darkgrey"
      sx={{ ml:1, display: { xs: "none", sm: "block" } }}
    >
      Menu bar buttons
    </Typography>
    <Typography
      variant="body1"
      color="darkgrey"
      sx={{ ml: 1, display: { xs: "block", sm: "none" } }}
    >
      Icons only
    </Typography>
    </>

  );
};
