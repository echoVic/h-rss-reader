import dynamic from 'next/dynamic';
import type { NextPage } from 'next';

// 使用动态导入，将 FeedList 设为仅客户端组件
const FeedList = dynamic(() => import('../components/FeedList'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Home: NextPage = () => {
  // 你的 RSS feed URL
  const feedUrl = 'https://rsshub.app/juejin/category/frontend'; 

  return (
    <div>
      <FeedList feedUrl={feedUrl} />
    </div>
  );
};

export default Home;