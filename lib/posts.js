import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), '_posts');

// 获取所有文章数据
export function getSortedPostsData() {
  // 获取_posts目录下的所有文件名
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // 移除文件名中的".md"以获取id
    const id = fileName.replace(/\.md$/, '');

    // 读取markdown文件为字符串
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 使用gray-matter解析文章元数据部分
    const matterResult = matter(fileContents);

    // 将数据与id组合
    return {
      id,
      ...matterResult.data,
    };
  });

  // 按日期排序
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 获取所有文章的id
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// 根据id获取文章数据
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // 使用gray-matter解析文章元数据
  const matterResult = matter(fileContents);

  // 使用remark将markdown解析为HTML字符串
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // 将数据与id和contentHtml组合
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

// 获取文章分类
export function getCategories() {
  const posts = getSortedPostsData();
  const categories = new Set();
  
  posts.forEach(post => {
    if (post.category) {
      categories.add(post.category);
    }
  });
  
  return Array.from(categories);
} 