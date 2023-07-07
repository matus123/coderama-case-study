import { Box, Grid, Typography } from '@mui/material';
import { useMemo } from 'react';
import { generateMovieDetailUrl } from '../../../services/urlBuilder';
import MovieSearchInfoCard, { LinkWithoutUnderline } from '../../../components/MovieSearchInfoCard';
import { MovieSearchInfo } from '../../../services/rtk-api/omdb/interfaces';

function MovieSearchResultGrid({ movies }: { movies: Array<MovieSearchInfo> }) {
  const gridContent = useMemo(() => {
    return movies.map((movieSearchInfo) => (
      <Grid
        item
        key={movieSearchInfo.imdbID}
        xl={6}
        md={6}
        sm={12}
        xs={12}
        sx={{ padding: { xs: 1, md: 2 } }}
      >
        <LinkWithoutUnderline to={generateMovieDetailUrl(movieSearchInfo.imdbID)}>
          <MovieSearchInfoCard data={movieSearchInfo} />
        </LinkWithoutUnderline>
      </Grid>
    ));
  }, [movies]);

  return (
    <Grid container spacing={2}>
      {gridContent}
    </Grid>
  );
}

type SearchResultsContainerProps = {
  data: Array<MovieSearchInfo>;
};

export function SearchResultsContainer({ data }: SearchResultsContainerProps) {
  return (
    <Box>
      {data.length === 0 ? (
        <Typography textAlign={'center'} variant="h4">
          No data to show
        </Typography>
      ) : (
        <>
          <Typography textAlign={'center'} variant="h4">
            Found results:
          </Typography>
          <MovieSearchResultGrid movies={data} />
        </>
      )}
    </Box>
  );
}
