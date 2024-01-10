import { Box } from "@mui/material";
import React from "react";

export const Rightbar = () => {
  return (
    <Box
      bgcolor="gray"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Right bar
    </Box>
  );
};
