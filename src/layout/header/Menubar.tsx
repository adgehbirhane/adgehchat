import { ChatTwoTone } from "@mui/icons-material";
import { Typography } from "@mui/material";

export const Menubar = () => {
  return (
    <>
      <Typography
        variant="body1"
        color="darkgrey"
        sx={{ ml: 1, display: { xs: "none", sm: "block" } }}
      >
        Dev links
      </Typography>
      <Typography
        variant="body1"
        color="darkgrey"
        bgcolor="teal"
        sx={{ pl: 2, pr: 2, mr: 0, display: { xs: "block", sm: "none", zIndex: 1 } }}
      >
           <ChatTwoTone sx={{pt: 1, color:"darkgrey", display: {xs: "block", sm: "none"}}}/>
      </Typography>
    </>
  );
};
