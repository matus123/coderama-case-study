import { Container, Grid, Stack, Typography, styled } from '@mui/material';

const StyledContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function LandingPage2() {
  return (
    <StyledContainer>
      <Grid justifyContent={'center'} alignItems={'center'}>
        <Stack direction="column" spacing={4}>
          <Typography variant="h1" textAlign={'center'}>
            OMDb demo application
          </Typography>
        </Stack>
      </Grid>
    </StyledContainer>
  );
}
