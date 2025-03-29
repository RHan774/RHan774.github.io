import { useState } from 'react';
import PostCard from '../../components/PostCard';
import { getSortedPostsData, getCategories } from '../../lib/posts';

export default function Posts({ allPostsData, categories }) {
  const [activeCategory, setActiveCategory] = useState('全部');
  
  // 根据选中的分类筛选文章
  const filteredPosts = activeCategory === '全部' 
    ? allPostsData 
    : allPostsData.filter(post => post.category === activeCategory);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">文章列表</h1>
      
      {/* 分类标签 */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-4 py-2 rounded-md ${
              activeCategory === '全部' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory('全部')}
          >
            全部
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md ${
                activeCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* 文章列表 */}
      <div className="grid grid-cols-1 gap-8">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-xl text-text-secondary">该分类下暂无文章</p>
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const categories = getCategories();
  
  return {
    props: {
      allPostsData,
      categories,
    },
  };
} 