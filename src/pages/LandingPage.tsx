import { Button, Card, Container, Grid, Stack, TextField, Typography, styled } from '@mui/material';
import { useAppDispatch } from '../store/hooks';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setApiKey } from '../store/apikey';

const StyledContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function LandingPage() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    dispatch(setApiKey(value));
    navigate('/');
  }, [dispatch, navigate, value]);
  return (
    <StyledContainer>
      <Grid justifyContent={'center'} alignItems={'center'}>
        <Card sx={{ padding: 2 }}>
          <Stack direction="column" spacing={4}>
            <Typography variant="h1" textAlign={'center'}>
              Landing screen
            </Typography>
            <TextField
              label="Enter OMDb API key"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button
              disabled={!value}
              size="large"
              onClick={onClick}
              color="primary"
              variant="contained"
            >
              Save API key
            </Button>
          </Stack>
        </Card>
      </Grid>
    </StyledContainer>
  );
}
