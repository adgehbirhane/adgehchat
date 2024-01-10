import { AppBar, Toolbar, styled } from '@mui/material'
import { Logo } from '../../common/logo/Logo'
import { Menubar } from './Menubar'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

export const Navbar = () => {
  return (
    <AppBar sx={{backgroundColor: 'teal', position: 'sticky', p: '0px'}}>
      <StyledToolbar>
          <Logo/>
          <Menubar/>
      </StyledToolbar>
    </AppBar>
  )
}
