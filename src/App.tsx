import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppSelector } from './store/hooks';
import LandingPage from './pages/LandingPage';
import LandingLayout from './layouts/landingLayout/LandingLayout';
import RootLayout from './layouts/rootLayout/RootLayout';
import ProtectedLayout from './layouts/protectedLayout/ProtectedLayout';
import { getProtectedLayoutLoader } from './layouts/protectedLayout/loader';
import { getLandingLayoutLoader } from './layouts/landingLayout/loader';
import LandingPage2 from './pages/LandingPage2';

function App() {
  const { apiKey } = useAppSelector(({ apiKey }) => apiKey);

  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      // errorElement: TODO:
      children: [
        {
          path: '/',
          element: <ProtectedLayout />,
          loader: getProtectedLayoutLoader(apiKey),
          children: [
            {
              path: '',
              element: <LandingPage2 />,
            },
            {
              path: 'movie',
              children: [
                {
                  path: '',
                  element: <div>Movies search/list</div>,
                  // element: <Team />,
                  // loader: teamLoader,
                },
                {
                  path: ':movieId',
                  element: <div>Movie detail/list</div>,
                  // element: <Team />,
                  // loader: teamLoader,
                },
              ],
            },
            {
              path: 'favorites',
              element: <div>favorites</div>,
            },
          ],
        },
        {
          path: '/landing',
          element: <LandingLayout />,
          loader: getLandingLayoutLoader(apiKey),
          children: [
            {
              path: '',
              element: <LandingPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
