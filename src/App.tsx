import { Box, Stack } from "@mui/material"
import { Navbar } from "./components/header/Navbar"
import { Sidebar } from "./components/sidebar/Sidebar"
import { Feed } from "./components/feed/Feed"
import { Rightbar } from "./components/rightbar/Rightbar"

function App() {

  return (
    <Box>
        <Navbar/>
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </Stack>
    </Box>
  )
}

export default App
