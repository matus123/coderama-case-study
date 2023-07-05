import { redirect } from 'react-router-dom';

export const getLoginLayoutLoader = (apiKey?: string) => async () => {
  if (apiKey != null) {
    return redirect('/');
  }
  return null;
};
