import { Button, Tooltip } from '@mui/material';

import styled from '@emotion/styled';
import { Star as StarIcon } from '@mui/icons-material';

import { Movie } from '../../../services/rtk-api/omdb/interfaces';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { removeFavorite, addFavorite } from '../../../store/favoriteMovies';
import { toast } from 'react-toastify';
import { useCallback } from 'react';

const StyledStarIcon = styled(StarIcon)((props: { isAdded: boolean }) => ({
  color: props.isAdded ? 'yellow' : 'inherit',
}));

interface Props {
  movie: Movie;
}

export function MovieDetailFavoriteButton({ movie }: Props) {
  const favoriteMovieIds = useAppSelector((state) => state.favoriteMovies.favoriteMovies);
  const dispatch = useAppDispatch();
  const isAdded = !!favoriteMovieIds.find(({ imdbId }) => movie.imdbID === imdbId);
  const onClick = useCallback(() => {
    if (isAdded) {
      dispatch(removeFavorite(movie.imdbID));
      toast.success(`Removed "${movie.Title}" from favorites!`);
    } else {
      dispatch(
        addFavorite({
          imdbId: movie.imdbID,
          name: movie.Title,
          year: movie.Year,
          poster: movie.Poster,
          type: movie.Type,
        }),
      );
      toast.success(`Added "${movie.Title}" to favorites!`);
    }
  }, [movie, dispatch, isAdded]);

  const tooltipTitle = isAdded
    ? `Remove "${movie.Title}" from favorites`
    : `Add "${movie.Title}" to favorites`;

  return (
    <Tooltip title={tooltipTitle}>
      <Button onClick={onClick}>
        <StyledStarIcon isAdded={isAdded} />
      </Button>
    </Tooltip>
  );
}
