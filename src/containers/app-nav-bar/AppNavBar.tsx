import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useCallback, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { clearApiKey } from '../../store/apiKey';
import { NavLink } from 'react-router-dom';

export default function AppNavBar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();

  const handleOpenUserMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    },
    [setAnchorElUser],
  );

  const handleCloseUserMenu = useCallback(() => {
    setAnchorElUser(null);
  }, [setAnchorElUser]);

  const handleLogout = useCallback(() => {
    dispatch(clearApiKey());
  }, [dispatch]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/">
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              OMDb
            </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <NavLink to="/movie">
              <Button sx={{ my: 2, color: 'white' }}>Movie Search</Button>
            </NavLink>
            <NavLink to="/favorites">
              <Button sx={{ my: 2, color: 'white' }}>Favorites</Button>
            </NavLink>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
