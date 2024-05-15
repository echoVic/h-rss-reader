import React, { useState, useEffect } from 'react';
import { Feed, FeedItem } from '../app/types';

const FeedList: React.FC<{ feedUrl: string }> = ({ feedUrl }) => {
  const [feed, setFeed] = useState<Feed | null>(null);

  useEffect(() => {
    const fetchFeed = async () => {
      const response = await fetch(`/api/feed?url=${feedUrl}`);
      const data = await response.json();
      setFeed(data);
    };

    fetchFeed();
  }, [feedUrl]);

  return (
    <div>
      <h1>{feed?.title}</h1>
      <ul>
        {feed?.items.map((item: FeedItem) => (
          <li key={item.link}>
            <a href={item.link} target="_blank">
              {item.title}
            </a>
            <p>{item.pubDate}</p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedList;