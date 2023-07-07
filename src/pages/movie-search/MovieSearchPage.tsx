import { Alert, Box, Button, CircularProgress, Container, Stack } from '@mui/material';
import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce';
import { PageContainer } from '../../components/styled/LayoutComponents';
import useInfiniteSearchMovieTitleScroll from '../../services/rtk-api/omdb/useInfiniteSearchMovieTitleScroll';
import SearchPanel from './components/MovieSearchPanel';
import { SearchResultsContainer } from './components/MovieSearchResultContainer';

export default function MovieSearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get('search');

  const [searchValue, setSearchValue] = useState<string>(searchParam || '');

  const debouncedSearchQuery = useDebounce(searchValue, 500);

  const { combinedData, error, isLoading, isFetching, readMore, refresh, hasMore } =
    useInfiniteSearchMovieTitleScroll(debouncedSearchQuery);

  const handleSearchValueChange = useCallback(
    (searchValue: string) => {
      setSearchValue(searchValue);
      setSearchParams({ search: searchValue });
      refresh();
    },
    [refresh, setSearchParams],
  );

  const showLoading = isLoading || isFetching;
  const movies = combinedData ?? [];

  return (
    <PageContainer>
      <Stack>
        <SearchPanel searchValue={searchValue} setSearchValue={handleSearchValueChange} />
        <Container fixed>
          {error && <Alert severity={'error'}>{JSON.stringify(error, undefined, ' ')}</Alert>}
          <>
            <SearchResultsContainer data={movies} />
            {hasMore && (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={readMore}>Load More</Button>
              </Box>
            )}
          </>
          {showLoading && (
            <Stack direction="row" justifyContent={'center'}>
              <CircularProgress />
            </Stack>
          )}
        </Container>
      </Stack>
    </PageContainer>
  );
}
