import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { FavoriteMovieInfo, removeFavorite } from '../../store/favoriteMovies';
import { useCallback } from 'react';
import { Close as CloseIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { generateMovieDetailUrl } from '../../services/urlBuilder';
import { toast } from 'react-toastify';
import { PageContainer } from '../../components/styled/LayoutComponents';
import FavoriteMoviesEmpty from './components/FavoriteMoviesEmpty';

function FavoriteMovieCardContainer({ favoriteMovie }: { favoriteMovie: FavoriteMovieInfo }) {
  const dispatch = useAppDispatch();
  const handleRemoveFavorite = useCallback(() => {
    dispatch(removeFavorite(favoriteMovie.imdbId));
    toast.warn(`Removed "${favoriteMovie.name}" from favourites!`);
  }, [dispatch, favoriteMovie]);

  return (
    <FavoriteMovieCard favoriteMovie={favoriteMovie} onRemoveFavorite={handleRemoveFavorite} />
  );
}

function FavoriteMovieCard({
  favoriteMovie,
  onRemoveFavorite,
}: {
  favoriteMovie: FavoriteMovieInfo;
  onRemoveFavorite: () => void;
}) {
  return (
    <Card>
      <Link to={generateMovieDetailUrl(favoriteMovie.imdbId)}>
        <CardActionArea>
          <CardHeader title={favoriteMovie.name} subheader={favoriteMovie.year} />

          <CardMedia component="img" image={favoriteMovie.poster} sx={{ width: 100 }} />
          <CardContent></CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Tooltip title="Remove movie from favorites">
          <IconButton onClick={onRemoveFavorite} aria-label="remove">
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

function FavoriteMoviesGrid({ favoriteMovies }: { favoriteMovies: FavoriteMovieInfo[] }) {
  return (
    <>
      <Typography variant="h3" textAlign={'center'}>
        Your favorite movies
      </Typography>
      <Grid container spacing={2}>
        {favoriteMovies.map((movie) => (
          <Grid key={movie.imdbId} xs={6}>
            <FavoriteMovieCardContainer favoriteMovie={movie} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default function FavoriteMoviesPage() {
  const favoriteMovies = useAppSelector((state) => state.favoriteMovies.favoriteMovies);

  return (
    <PageContainer>
      <Stack spacing={4}>
        {favoriteMovies.length === 0 ? (
          <FavoriteMoviesEmpty />
        ) : (
          <FavoriteMoviesGrid favoriteMovies={favoriteMovies} />
        )}
      </Stack>
    </PageContainer>
  );
}
