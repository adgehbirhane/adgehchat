import { Avatar, Box, Typography } from "@mui/material";

export const ChatSpace = () => {
  return (
    <Box bgcolor="#4e4e4e" flex={2} p={2} height="100vh">
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
          <img src="https://static.wikia.nocookie.net/miamivice/images/3/3f/Publicimageltd.jpg" />
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
          <Typography variant="body1">
            History is the study of change over time, and it covers all aspects
            of human society. Political, social, economic, scientific,
            technological, medical, cultural, intellectual, religious and
            military developments are all part of history.
          </Typography>
          <Typography color="darkgray">{new Date().toUTCString()}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
