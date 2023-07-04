import { redirect } from 'react-router-dom';

export const getLandingLayoutLoader = (apiKey?: string) => async () => {
  if (apiKey != null) {
    return redirect('/');
  }
  return null;
};
