import Link from 'next/link';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <Link href={`/posts/${post.id}`} className="block">
        <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
          {post.title}
        </h3>
      </Link>
      
      <div className="flex items-center text-sm text-text-secondary mb-3">
        <span className="mr-3">
          {format(new Date(post.date), 'yyyy年MM月dd日', { locale: zhCN })}
        </span>
        {post.category && (
          <span className="bg-gray-100 px-2 py-1 rounded-md">
            {post.category}
          </span>
        )}
      </div>
      
      {post.excerpt && (
        <p className="text-text-secondary line-clamp-3">
          {post.excerpt}
        </p>
      )}
      
      <div className="mt-4">
        <Link href={`/posts/${post.id}`} className="text-primary hover:underline">
          阅读全文 →
        </Link>
      </div>
    </div>
  );
} 