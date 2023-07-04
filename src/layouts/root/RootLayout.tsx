import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Outlet />
    </Box>
  );
}
