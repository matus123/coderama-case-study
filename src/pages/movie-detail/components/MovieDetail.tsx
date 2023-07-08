import {
  Stack,
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  CardActions,
  Divider,
  List,
  ListItem,
} from '@mui/material';
import { Movie } from '../../../services/rtk-api/omdb/interfaces';
import { useMemo } from 'react';
import { MovieDetailFavoriteButton } from './MovieDetailFavoriteButton';

type Props = {
  movie: Movie;
};

export default function MovieDetail({ movie }: Props) {
  const labels = movie.Genre.split(',').map((genre) => genre.trim());

  const genres = useMemo(() => {
    return labels.map((label) => <Chip key={label} variant="outlined" label={label} />);
  }, [labels]);

  return (
    <Card>
      <CardContent>
        <Stack justifyContent="space-between">
          <Stack alignItems={'center'}>
            <img src={movie.Poster} alt="Poster" />
          </Stack>

          <Stack justifyContent={'space-between'} direction={'row'}>
            <Box>
              <Typography variant="h3">{movie.Title}</Typography>
              <Stack direction={'row'} spacing={2} alignItems={'center'}>
                <Typography>{movie.Year}</Typography>
                <Typography>{movie.Rated}</Typography>
                <Typography>{movie.Runtime}</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                {genres}
              </Stack>
            </Box>

            <Box>
              <Stack direction={'row'} justifyContent="space-between">
                <Stack direction="column" flexShrink={0}>
                  <Typography variant="body2">IMDb RATING</Typography>
                  <Typography variant="h6">
                    <strong>{movie.imdbRating}</strong> / 10
                  </Typography>
                  <Typography variant="body2">
                    <small>{movie.imdbVotes} votes</small>
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Stack>

          <Stack direction="row">
            <List>
              <ListItem>
                <Typography variant="h5">{movie.Plot}</Typography>
              </ListItem>
              <ListItem>
                <Stack direction={'row'} spacing={2}>
                  <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    Director:
                  </Typography>
                  <Typography variant="h5">{movie.Director}</Typography>
                </Stack>
              </ListItem>
              <ListItem>
                <Stack direction={'row'} spacing={2}>
                  <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    Writer:
                  </Typography>
                  <Typography variant="h5">{movie.Writer}</Typography>
                </Stack>
              </ListItem>
              <ListItem>
                <Stack direction={'row'} spacing={2}>
                  <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    Stars:
                  </Typography>
                  <Typography variant="h5">{movie.Actors}</Typography>
                </Stack>
              </ListItem>
            </List>
          </Stack>
        </Stack>
      </CardContent>
      <Divider />
      <CardActions>
        <MovieDetailFavoriteButton movie={movie} />
      </CardActions>
    </Card>
  );
}
