import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchMovieTitleQuery } from './omdb';
import { MovieSearchInfo } from './interfaces';

const calculateMaxPages = (total: number, size: number) => {
  return Math.ceil(total / size);
};

const isValidNotEmptyArray = <T>(array: T[]): boolean => {
  return !!(array && array?.length && array?.length > 0);
};

const useInfiniteSearchMovieTitleScroll = (searchValue: string) => {
  const [localPage, setLocalPage] = useState(1);
  const [combinedData, setCombinedData] = useState<MovieSearchInfo[]>([]);
  const queryResponse = useSearchMovieTitleQuery(
    {
      search: searchValue,
      page: localPage,
    },
    {
      skip: searchValue === '',
    },
  );
  const { totalResults, Search: fetchData = [] } = queryResponse?.data || {};
  const remotePage = localPage;
  const remoteTotal = parseInt(totalResults || '0', 10);

  useEffect(() => {
    if (isValidNotEmptyArray(fetchData)) {
      if (localPage === 1) setCombinedData(fetchData);
      else if (localPage === remotePage) {
        setCombinedData((previousData) => [...previousData, ...fetchData]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData]);

  const maxPages = useMemo<number>(() => {
    return calculateMaxPages(remoteTotal, 10);
  }, [remoteTotal]);

  const refresh = useCallback(() => {
    setLocalPage(1);
  }, []);

  const readMore = () => {
    if (localPage < maxPages && localPage === remotePage) {
      setLocalPage((page) => page + 1);
    }
  };

  return {
    combinedData,
    localPage,
    readMore,
    refresh,
    error: queryResponse?.error,
    isLoading: queryResponse?.isLoading,
    isFetching: queryResponse?.isFetching,
    hasMore: localPage < maxPages,
  };
};

export default useInfiniteSearchMovieTitleScroll;
