import Head from 'next/head';
import Link from 'next/link';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  return (
    <article className="max-w-3xl mx-auto">
      <Head>
        <title>{postData.title} | RHan</title>
        <meta name="description" content={postData.excerpt || postData.title} />
      </Head>
      
      {/* 返回按钮 */}
      <div className="mb-8">
        <Link href="/posts" className="text-text-secondary hover:text-primary flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          返回文章列表
        </Link>
      </div>
      
      {/* 文章标题和元信息 */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{postData.title}</h1>
        <div className="flex items-center text-sm text-text-secondary">
          <span className="mr-4">
            {format(new Date(postData.date), 'yyyy年MM月dd日', { locale: zhCN })}
          </span>
          {postData.category && (
            <span className="bg-gray-100 px-2 py-1 rounded-md">
              {postData.category}
            </span>
          )}
        </div>
      </header>
      
      {/* 文章内容 */}
      <div className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </article>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
} 