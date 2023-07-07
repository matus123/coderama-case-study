import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppSelector } from './store/hooks';
import LoginPage from './pages/LoginPage';
import LoginLayout from './layouts/login/LoginLayout';
import RootLayout from './layouts/root/RootLayout';
import ProtectedLayout from './layouts/protected/ProtectedLayout';
import { getProtectedLayoutLoader } from './layouts/protected/loader';
import { getLoginLayoutLoader } from './layouts/login/loader';
import LandingPage from './pages/LandingPage';
import MovieDetailPage from './pages/movie-detail/MovieDetailPage';
import MovieSearchPage from './pages/movie-search/MovieSearchPage';
import ErrorBoundaryCustom from './pages/ErrorBoundaryPage';

function App() {
  const { apiKey } = useAppSelector(({ apiKey }) => apiKey);

  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      errorElement: <ErrorBoundaryCustom />,
      children: [
        {
          path: '/',
          element: <ProtectedLayout />,
          loader: getProtectedLayoutLoader(apiKey),
          children: [
            {
              path: '',
              element: <LandingPage />,
              lazy: async () => ({ Component: (await import('./pages/LandingPage')).default }),
            },
            {
              path: 'movie',
              children: [
                {
                  path: '',
                  element: <MovieSearchPage />,
                  lazy: async () => ({
                    Component: (await import('./pages/movie-search/MovieSearchPage')).default,
                  }),
                },
                {
                  path: ':movieId',
                  element: <MovieDetailPage />,
                  lazy: async () => ({
                    Component: (await import('./pages/movie-detail/MovieDetailPage')).default,
                  }),
                },
              ],
            },
            {
              path: 'favorites',
              lazy: async () => ({
                Component: (await import('./pages/favorite-movies/FavouriteMoviesPage')).default,
              }),
            },
          ],
        },
        {
          path: 'login',
          element: <LoginLayout />,
          loader: getLoginLayoutLoader(apiKey),
          children: [
            {
              path: '',
              element: <LoginPage />,
            },
          ],
          lazy: async () => ({ Component: (await import('./layouts/login/LoginLayout')).default }),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
