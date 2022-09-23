//Types
import { Movies } from '../../api-source/types';
import type { NextApiRequest, NextApiResponse } from 'next';
//API useImperativeHandle(
import { SEARCH_BASE_URL, POPULAR_BASE_URL } from '../../config';
// Basic fetch function
import { basicFetch } from '../../api-source/fetchFunctions';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movies>
) {
  // grab search params
  const { page, search } = req.query;

  //set up 2 endpoints
  const endpoint = search
    ? `${SEARCH_BASE_URL}${search}&page=${page}`
    : `${POPULAR_BASE_URL}&page=${page}`;
  const data = await basicFetch<Movies>(endpoint);

  res.status(200).json(data);
}
