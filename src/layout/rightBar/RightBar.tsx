import { Box } from "@mui/material";

export const RightBar = () => {
  return (
    <Box
      bgcolor="gray"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", lg: "block" }, height: '80vh' }}
    >
      Right bar
    </Box>
  );
};
