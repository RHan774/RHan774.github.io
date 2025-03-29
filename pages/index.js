import Link from 'next/link';
import PostCard from '../components/PostCard';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">RHan</h1>
        <p className="text-xl text-text-secondary">欢迎来到我的个人博客，这里记录我的学习、思考和创作。</p>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">最新文章</h2>
          <Link href="/posts" className="text-primary hover:underline">
            查看全部 →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allPostsData.slice(0, 4).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
} 