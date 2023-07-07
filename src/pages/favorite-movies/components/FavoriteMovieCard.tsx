import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Tooltip,
} from '@mui/material';
import { FavoriteMovieInfo } from '../../../store/favoriteMovies';
import { generateMovieDetailUrl } from '../../../services/urlBuilder';
import { Link } from 'react-router-dom';
import { Close as CloseIcon } from '@mui/icons-material';

export default function FavoriteMovieCard({
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
