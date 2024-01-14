import { InfoTwoTone } from "@mui/icons-material";
import { Avatar, Box, Divider, Switch, Typography } from "@mui/material";
// import PersonYouMayKnow from "../../section/PersonYouMayKnow";

export const RightBar = () => {
  return (
    <Box
      bgcolor="#313131"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", lg: "block" }}}
    >
      {/* <Box>
        <Typography>Person you may know</Typography>
        <PersonYouMayKnow/>
      </Box> */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Avatar />
        <Box>
          <Typography>Abebe Kebede</Typography>
          <Typography color="darkGrey">Last seen recently </Typography>
        </Box>
      </Box>

      <Divider sx={{ m: 2 }} />

      <Box sx={{ display: "flex", gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            mr: 4,
            mt: 2,
            flex: 1,
          }}
        >
          <InfoTwoTone />
        </Box>
        <Box flex={2}>
          <Box sx={{ p: 1 }}>
            <Typography>Abebe Kebede</Typography>
            <Typography color="darkGrey">Last seen recently </Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            <Typography>Never give up!</Typography>
            <Typography color="darkGrey">Bio</Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            <Typography>@abekebe</Typography>
            <Typography color="darkGrey">username </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ m: 2 }} />

      <Box sx={{ display: "flex", gap: 1 }}>
        <Switch />
        <Typography sx={{ mt: 0.5 }}>Theme</Typography>
      </Box>
    </Box>
  );
};
