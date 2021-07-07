import { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';

const COOKIE_AUTH_KEY = 'auth-token';

/**
 * handle the api call
 * @param req next api request object
 * @param res next api response object
 * @returns
 */
const proxyHandler = (req: NextApiRequest, res: NextApiResponse): void => {
  const cookies = new Cookies(req, res);
  cookies.set('auth-token', null);
  res.redirect('/');
};

export default proxyHandler;
