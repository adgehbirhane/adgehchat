import { AppBar, Toolbar, styled } from '@mui/material'
import { Logo } from '../../common/logo/Logo'
import { Menubar } from './Menubar'
import { Advertisement } from './Advertisement'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  mr: 0,
  pr: 0,
})

export const Navbar = () => {
  return (
    <AppBar sx={{backgroundColor: 'teal', position: 'sticky', p: '0px'}}>
      <StyledToolbar>
          <Logo/>
          <Advertisement/>
          <Menubar/>
      </StyledToolbar>
    </AppBar>
  )
}
