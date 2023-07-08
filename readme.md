# OMDB Demo App

App was created by vite template. Using typescript and reactjs.

## Stack

- ReactJS
- Typescript
- Vite -- for bundling
- Material UI -- for UI components
- React Router -- for routing
- Redux toolkit -- for state management
  - redux-persist -- for persisting state in localstorage
  - RTK Query -- for fetching data from API
- React Toastify -- for toast notification

## How to run

- starts vite dev server with auto reload/restart/refresh

```bash
yarn run dev
```

## App Page Structure

- Login page
  - requires OMDB API key
- Landing Page
  - Dummy page with title
- Movie Search Page
  - Search input
  - Search result
- Movie Detail Page
  - Show details of Movie
  - director, actors, imdb ratings, poster, plot, etc
  - button for making movie favorite
- Favorite Movie Page
  - Show list of favorite movies
  - button for removing movie from favorite list

### App Navigation

- navigating by clicking on links in app bar
- navigating by clicking on movie card

## Suggestions

- better error handling
- LOGOUT on auth error
- better/nicer UI
