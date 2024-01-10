import { Box } from "@mui/material";
import React from "react";

export const SidebarChild = () => {
  return (
    <Box
      bgcolor="purple"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Child side bar
    </Box>
  );
};
