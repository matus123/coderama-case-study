import { useParams } from 'react-router-dom';
import { PageContainer } from '../../components/styled/LayoutComponents';
import MovieNotFoundPage from './components/MovieNotFoundPage';
import MovieDetailContainer from './components/MovieDetailContainer';

export default function MovieDetailPage() {
  const { movieId } = useParams();

  if (movieId === undefined) {
    return <MovieNotFoundPage reason={'Invalid movieId'} />;
  }

  return (
    <PageContainer>
      <MovieDetailContainer id={movieId} />
    </PageContainer>
  );
}
