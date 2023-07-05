import { Outlet } from 'react-router-dom';
import AppNavBar from '../../containers/app-nav-bar/AppNavBar';
import { Container } from '@mui/material';

function HeaderLayout() {
  return (
    <header>
      <AppNavBar />
    </header>
  );
}

export default function ProtectedLayout() {
  return (
    <>
      <HeaderLayout />
      <Container fixed>
        <Outlet />
      </Container>
    </>
  );
}
