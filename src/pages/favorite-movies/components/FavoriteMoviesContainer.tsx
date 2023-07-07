import Typography from '@mui/material/Typography';
import { FavoriteMovieInfo } from '../../../store/favoriteMovies';
import Grid from '@mui/material/Grid';
import FavoriteMovieCardContainer from './FavoriteMovieCardContainer';
import { useMemo } from 'react';

export default function FavoriteMoviesContainer({
  favoriteMovies,
}: {
  favoriteMovies: FavoriteMovieInfo[];
}) {
  const favoriteMoviesList = useMemo(
    () =>
      favoriteMovies.map((movie) => (
        <Grid key={movie.imdbId} xs={6}>
          <FavoriteMovieCardContainer favoriteMovie={movie} />
        </Grid>
      )),
    [favoriteMovies],
  );

  return (
    <>
      <Typography variant="h3" textAlign={'center'}>
        Your favorite movies
      </Typography>
      <Grid container spacing={2}>
        {favoriteMoviesList}
      </Grid>
    </>
  );
}
