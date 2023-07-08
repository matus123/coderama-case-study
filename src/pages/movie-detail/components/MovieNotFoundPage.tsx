import { Alert, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../../../components/styled/LayoutComponents';
import { generateMoviesUrl } from '../../../services/urlBuilder';

export default function MovieNotFoundPage({ reason }: { reason: string }) {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Alert severity="error" sx={{ margin: 'auto' }}>
        Movie not found: ({reason})
      </Alert>
      <Button variant="contained" onClick={() => navigate(generateMoviesUrl())}>
        Back to Search
      </Button>
    </PageContainer>
  );
}
