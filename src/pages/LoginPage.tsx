import { Button, Card, Stack, TextField, Typography } from '@mui/material';
import { useAppDispatch } from '../store/hooks';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setApiKey } from '../store/apiKey';
import { FullCenteredContainer } from '../components/styled/LayoutComponents';

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    dispatch(setApiKey(value));
    navigate('/');
  }, [dispatch, navigate, value]);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    [],
  );

  return (
    <FullCenteredContainer>
      <Card sx={{ padding: 10 }}>
        <Stack spacing={4}>
          <Typography variant="h1" textAlign={'center'}>
            Login screen
          </Typography>
          <TextField label="Enter OMDb API key" value={value} onChange={handleOnChange} />
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
    </FullCenteredContainer>
  );
}
