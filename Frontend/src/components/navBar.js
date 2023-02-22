import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import React from 'react';
import { ReactComponent as Logo } from '../Logo.svg';


function NavBar() {
  const matches = useMediaQuery('(min-width:1100px)');

  return (
    <AppBar position="static" style={{ background: 'gray', boxShadow: 'none' }}>
      <Toolbar>
        <Stack direction={{ xs: 'column', sm: 'row' }} width="100%" spacing={2} justifyContent="space-between" alignItems="center">
          <Stack direction={{ sm: 'column', md: 'row' }} alignItems="center" spacing={2}>
            <Link to={"/"}>
              <Logo width="125" height="125" />
            </Link>
            <Link to={"/"} style={{ textDecoration: 'none', color: "white" }}>
              <Typography variant={matches ? 'h1' : 'h2'}>
                FireFly
              </Typography>
            </Link>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2}>
            <Button fullWidth component={Link} to={"/login"}>Login</Button>
            <Button fullWidth component={Link} to={"/signup"}>SignUp</Button>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;