import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieDetail } from './interfaces';

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://www.omdbapi.com' }),
  endpoints: (builder) => ({
    getMovieTitle: builder.query<MovieDetail, string>({
      query: (id) => `?apikey=3e974fca&t=${id}`,
    }),
    searchMovieTitle: builder.query<MovieDetail, string>({
      query: (id) => `?apikey=3e974fca&s=${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieTitleQuery } = movieApi;

const xx = {
  Title: 'Aquaman',
  Year: '2018',
  Rated: 'PG-13',
  Released: '21 Dec 2018',
  Runtime: '143 min',
  Genre: 'Action, Adventure, Fantasy',
  Director: 'James Wan',
  Writer: 'David Leslie Johnson-McGoldrick, Will Beall, Geoff Johns',
  Actors: 'Jason Momoa, Amber Heard, Willem Dafoe',
  Plot: "Born upon the shores of the surface world, Arthur Curry (Jason Momoa) discovers that he is only half human, with the other half of his blood being of Atlanteean descent, thus making him the rightful heir to the throne of the undersea kingdom of Atlantis. However, Arthur learns that Atlantis is being ruled by his malicious half-brother Orm (Patrick Wilson), who seeks to unite the seven underwater kingdoms and wage war upon the surface. With aid from Nuidis Vulko (Willem Dafoe) and the gorgeous Mera (Amber Heard), Arthur must discover the full potential of his true destiny and become Aquaman in order to save Atlantis and the surface from Orm's evil plot.",
  Language: 'English, Russian, Maori, Italian',
  Country: 'United States, Australia',
  Awards: '2 wins & 36 nominations',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '6.8/10' },
    { Source: 'Rotten Tomatoes', Value: '65%' },
    { Source: 'Metacritic', Value: '55/100' },
  ],
  Metascore: '55',
  imdbRating: '6.8',
  imdbVotes: '494,610',
  imdbID: 'tt1477834',
  Type: 'movie',
  DVD: '26 Mar 2019',
  BoxOffice: '$335,104,314',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
};
