import { Box, Stack } from "@mui/material"
import { Navbar } from "./layout/header/Navbar"
import { Sidebar } from "./layout/sidebar/Sidebar"
import { Feed } from "./layout/feed/Feed"
import { Rightbar } from "./layout/rightbar/Rightbar"
import { SidebarChild } from "./layout/sidebarChild/SidebarChild"

function App() {

  return (
    <Box>
        <Navbar/>
        <Stack direction="row" justifyContent="space-between" spacing={0.5}>
          <Sidebar/>
          <SidebarChild/>
          <Feed/>
          <Rightbar/>
        </Stack>
    </Box>
  )
}

export default App
