import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { FavoriteMovieInfo, removeFavorite } from '../../../store/favoriteMovies';
import { useAppDispatch } from '../../../store/hooks';
import FavoriteMovieCard from './FavoriteMovieCard';

export default function FavoriteMovieCardContainer({
  favoriteMovie,
}: {
  favoriteMovie: FavoriteMovieInfo;
}) {
  const dispatch = useAppDispatch();
  const handleRemoveFavorite = useCallback(() => {
    dispatch(removeFavorite(favoriteMovie.imdbId));
    toast.warn(`Removed "${favoriteMovie.name}" from favourites!`);
  }, [dispatch, favoriteMovie]);

  return (
    <FavoriteMovieCard favoriteMovie={favoriteMovie} onRemoveFavorite={handleRemoveFavorite} />
  );
}
