import { redirect } from 'react-router-dom';

export const getProtectedLayoutLoader = (apiKey?: string) => async () => {
  if (apiKey == null) {
    return redirect('/landing');
  }
  return null;
};
