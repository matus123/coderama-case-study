import styled from '@emotion/styled';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { MovieSearchInfo } from '../services/rtk-api/omdb/interfaces';

type Props = {
  data: MovieSearchInfo;
};

export const LinkWithoutUnderline = styled(Link)({
  textDecoration: 'none',
});

export default function MovieSearchInfoCard({ data: { Poster, Title, Type, Year } }: Props) {
  const hasPoster = Poster !== 'N/A' && Poster != null && Poster !== '';

  return (
    <Card sx={{ flexDirection: 'row', display: 'flex', height: 150 }}>
      {hasPoster ? (
        <CardMedia component="img" image={Poster} sx={{ width: 100 }} />
      ) : (
        <Box sx={{ width: 100, backgroundColor: 'lightblue' }}>No Poster</Box>
      )}

      <CardContent>
        <Typography variant="h5">{Title}</Typography>
        <Typography>{Year}</Typography>
        <Typography>{Type}</Typography>
      </CardContent>
    </Card>
  );
}
