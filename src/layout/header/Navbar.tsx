import { AppBar, Toolbar, styled } from '@mui/material'
import { Logo } from '../../common/logo/Logo'
import { Menubar } from './Menubar'
import { Marque } from '../../components/Marque'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

export const Navbar = () => {
  return (
    <AppBar sx={{backgroundColor: 'teal', position: 'sticky', p: '0px'}}>
      <StyledToolbar>
          <Logo/>
          <Marque text="This space is available for any advertisements..."/>
          <Menubar/>
      </StyledToolbar>
    </AppBar>
  )
}
