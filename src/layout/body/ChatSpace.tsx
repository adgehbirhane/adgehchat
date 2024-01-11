import { Avatar, Box, Typography } from "@mui/material";

export const ChatSpace = () => {
  return (
    <Box bgcolor="dimgray" flex={2} p={2} sx={{ height: "80vh" }}>
      <Box display="flex" gap={2}>
        <Avatar sx={{ mt: 3 }} />
        <Box
          sx={{
            backgroundColor: "lightblue",
            p: 1,
            borderRadius: 5,
            borderEndStartRadius: 0,
            mt: 1,
          }}
        >
          <Typography variant="body1">Hi ser...</Typography>
          <Typography color="darkgray">{new Date().toUTCString()}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "right" }}>
        <Box
          sx={{
            backgroundColor: "lightcyan",
            p: 1,
            mt: 1,
            borderRadius: 5,
            borderEndEndRadius: 0,
          }}
        >
          <Typography variant="body1">Hi you! ser...</Typography>
          <Typography color="darkgray">{new Date().toUTCString()}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "right" }}>
        <Box
          sx={{
            p: 1,
            mt: 1,
            borderRadius: 5,
            borderEndEndRadius: 0,
          }}
        >
          <img src="https://static.wikia.nocookie.net/miamivice/images/3/3f/Publicimageltd.jpg"/>
          <Typography color="darkgray">{new Date().toUTCString()}</Typography>
        </Box>
      </Box>
      <Box display="flex" gap={2}>
        <Avatar sx={{ mt: 3 }} />
        <Box
          sx={{
            backgroundColor: "lightblue",
            p: 1,
            borderRadius: 5,
            borderEndStartRadius: 0,
            mt: 1,
          }}
        >
          <Typography variant="body1">Oh! What a memorable image...</Typography>
          <Typography color="darkgray">{new Date().toUTCString()}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
