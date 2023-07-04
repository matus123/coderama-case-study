import { Outlet } from 'react-router-dom';
import AppNavBar from '../../containers/app-nav-bar/AppNavBar';

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
      <Outlet />
    </>
  );
}
