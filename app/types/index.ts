export interface Feed {
    url: string;
    title: string;
    items: FeedItem[];
  }
  
  export interface FeedItem {
    title: string;
    link: string;
    pubDate: string;
    author: string;
    content: string;
  }