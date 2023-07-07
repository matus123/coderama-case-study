import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FavoriteMovieInfo {
  imdbId: string;
  poster: string;
  name: string;
  year: string;
  type: string;
}

interface FavoriteMoviesState {
  favoriteMovies: FavoriteMovieInfo[];
}

const initialState: FavoriteMoviesState = { favoriteMovies: [] };

const favoriteMovieSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<FavoriteMovieInfo>) {
      state.favoriteMovies = state.favoriteMovies.concat(action.payload);
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.favoriteMovies = state.favoriteMovies.filter(({ imdbId }) => imdbId !== action.payload);
    },
  },
});

export const { removeFavorite, addFavorite } = favoriteMovieSlice.actions;
export default favoriteMovieSlice.reducer;
