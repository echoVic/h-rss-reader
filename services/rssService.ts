
import fetch from 'node-fetch';
import * as xml2js from 'xml2js';
import { Feed, FeedItem } from '../app/types';

export async function getFeed(url: string): Promise<Feed | undefined> {
  try {
    const res = await fetch(url);
    const xml = await res.text();
    const parseResult = await xml2js.parseStringPromise(xml);
    const items: FeedItem[] = parseResult.rss.channel[0].item.map((i: any) => ({
      title: i.title[0],
      link: i.link[0],
      pubDate: i.pubDate[0],
      author: i.author ? i.author[0] : null,
      content: i.description[0],
    }));

    const feed: Feed = {
      url,
      title: parseResult.rss.channel[0].title[0],
      items,
    };

    return feed;
  } catch (error) {
    console.error(`Error fetching feed: ${error}`);
  }
}