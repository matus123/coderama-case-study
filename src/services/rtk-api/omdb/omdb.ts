import {
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { MovieResponse, MovieSearchResponse } from './interfaces';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com' }),
  endpoints: (builder) => ({
    getMovieTitle: builder.query<MovieResponse, string>({
      queryFn: (
        id,
        queryApi,
        _extraOptions,
        baseQuery: (
          arg: string | FetchArgs,
        ) => MaybePromise<QueryReturnValue<MovieResponse, FetchBaseQueryError, FetchBaseQueryMeta>>,
      ) => {
        // FIXME: there is circular dependency between omdb.ts and store.ts
        // there is bug opened in github, there is not solution for it yet
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const apiKey: string | undefined = (queryApi.getState() as any).apiKey.apiKey;

        return baseQuery(`?apikey=${apiKey}&i=${id}`);
      },
    }),
    searchMovieTitle: builder.query<MovieSearchResponse, { search: string; page?: number }>({
      queryFn: (
        args,
        queryApi,
        _extraOptions,
        baseQuery: (
          arg: string | FetchArgs,
        ) => MaybePromise<
          QueryReturnValue<MovieSearchResponse, FetchBaseQueryError, FetchBaseQueryMeta>
        >,
      ) => {
        // FIXME: there is circular dependency between omdb.ts and store.ts
        // there is bug opened in github, there is not solution for it yet
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const apiKey: string | undefined = (queryApi.getState() as any).apiKey.apiKey;

        return baseQuery(`?apikey=${apiKey}&s=${args.search}&type=movie&page=${args.page}`);
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieTitleQuery, useSearchMovieTitleQuery } = movieApi;
