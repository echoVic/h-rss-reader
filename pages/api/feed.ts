import type { NextApiRequest, NextApiResponse } from 'next';
import { getFeed } from '../../services/rssService';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (typeof url !== 'string') {
    res.status(400).send({ message: 'URL is required' });
    return;
  }

  const feed = await getFeed(url);

  if (feed) {
    res.status(200).json(feed);
  } else {
    res.status(500).send({ message: 'Fail to parse feed' });
  }
};