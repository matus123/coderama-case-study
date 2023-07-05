import { redirect } from 'react-router-dom';
import { generateLoginUrl } from '../../services/urlBuilder';

export const getProtectedLayoutLoader = (apiKey?: string) => async () => {
  if (apiKey == null) {
    return redirect(generateLoginUrl());
  }
  return null;
};
