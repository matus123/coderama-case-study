export type ErrorResponse = {
  Error: string;
  Response: 'False';
};

export type MaybeErrorResponse<T extends { Response: 'True' }> = T | ErrorResponse;

export type Rating = {
  Source: string;
  Value: string;
};

export type MovieDetail = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<Rating>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: 'True';
};

export type MovieSummary = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type SearchResponse = {
  Search: Array<MovieSummary>;
  totalResults: string;
  Response: 'True';
};
