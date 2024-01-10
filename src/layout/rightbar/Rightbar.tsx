import { Box } from "@mui/material";

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
