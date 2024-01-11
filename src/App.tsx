import { Box, Stack } from "@mui/material"
import { Navbar } from "./layout/header/Navbar"
import { Sidebar } from "./layout/sidebar/Sidebar"
import { ChatSpace } from "./layout/body/ChatSpace"
import { RightBar } from "./layout/rightBar/RightBar"
import { SidebarChild } from "./layout/sidebarChild/SidebarChild"

function App() {

  return (
    <Box>
        <Navbar/>
        <Stack direction="row" justifyContent="space-between" spacing={0.5}>
          <Sidebar/>
          <SidebarChild/>
          <ChatSpace/>
          <RightBar/>
        </Stack>
        <Stack>

        </Stack>
    </Box>
  )
}

export default App
