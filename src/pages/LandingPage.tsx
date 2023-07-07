import { Stack, Typography } from '@mui/material';
import { FullCenteredContainer } from '../components/styled/LayoutComponents';

export default function LandingPage() {
  return (
    <FullCenteredContainer>
      <Stack spacing={4}>
        <Typography variant="h1" textAlign={'center'}>
          OMDb demo application
        </Typography>
      </Stack>
    </FullCenteredContainer>
  );
}
