import { Stack, CircularProgress } from '@mui/material';
import { useGetMovieTitleQuery } from '../../../services/rtk-api/omdb/omdb';
import MovieNotFoundPage from './MovieNotFoundPage';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { isMovieErrorResponse } from '../../../services/rtk-api/omdb/errorhandling';
import MovieDetail from './MovieDetail';

type Props = {
  id: string;
};

export default function MovieDetailContainer({ id }: Props) {
  const { data, error, isLoading } = useGetMovieTitleQuery(id);

  useEffect(() => {
    if (error) {
      toast.error('Could not fetch movie details: ' + JSON.stringify(error));
    }
  }, [error]);

  useEffect(() => {
    if (isMovieErrorResponse(data)) {
      toast.error('Could not fetch movie details: ' + data.Error);
    }
  }, [data]);

  if (isLoading) {
    return (
      <Stack flexDirection={'column'} alignItems="center">
        <CircularProgress />
      </Stack>
    );
  }

  if (isMovieErrorResponse(data)) {
    return <MovieNotFoundPage reason={data.Error} />;
  }

  if (data == null) {
    return <MovieNotFoundPage reason={'Could not find movie'} />;
  }

  return <MovieDetail movie={data} />;
}
