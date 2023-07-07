export const MOVIE_PREFIX = 'movie' as const;
export const FAVORITES_PREFIX = 'favorites' as const;
export const LOGIN_PREFIX = 'login' as const;

export function generateMoviesUrl() {
  return `/${MOVIE_PREFIX}` as const;
}

export function generateMovieDetailUrl(movieId: string) {
  return `/${MOVIE_PREFIX}/${movieId}` as const;
}

export function generateLoginUrl() {
  return `/${LOGIN_PREFIX}` as const;
}

export function generateFavoritesUrl() {
  return `/${FAVORITES_PREFIX}` as const;
}
