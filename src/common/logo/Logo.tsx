import { ChatTwoTone } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'

export const Logo = () => {
  return (
    <>
    <Typography variant="body1" color="darkgrey" sx={{display: {xs:"none", sm: "block"}}}>
        ADGEH CHAT
    </Typography>
    <ChatTwoTone sx={{pt: 1, color:"darkgrey", display: {xs: "block", sm: "none"}}}/>
    </>
  )
}
