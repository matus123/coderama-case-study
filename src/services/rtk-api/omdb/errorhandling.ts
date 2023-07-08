import { Movie, MovieError, MovieResponse } from './interfaces';

export function isMovieSuccessResponse(response?: MovieResponse): response is Movie {
  return response?.Response === 'True';
}

export function isMovieErrorResponse(response?: MovieResponse): response is MovieError {
  return response?.Response === 'False';
}

// export function isMovieSearchError(error: unknown): error is MovieError {}

export function isOmdbAuthError(error: unknown): boolean {
  console.log(error);
  return error === 'Invalid API key!';
}
