import Head from 'next/head';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <Head>
        <title>关于 | RHan</title>
        <meta name="description" content="关于RHan的个人博客" />
      </Head>
      
      <h1 className="text-3xl font-bold mb-6">关于我</h1>
      
      <div className="prose max-w-none">
        <p>欢迎来到我的个人博客！我是RHan，一个热爱技术和写作的开发者。</p>
        
        <h2>技术栈</h2>
        <ul>
          <li>前端：React、Vue、TypeScript</li>
          <li>后端：Node.js、Python</li>
          <li>其他：机器学习、计算机视觉</li>
        </ul>
        
        <h2>联系方式</h2>
        <p>
          如果您有任何问题或建议，欢迎通过以下方式联系我：
        </p>
        <ul>
          <li>邮箱：<a href="mailto:97265759@qq.com">97265759@qq.com</a></li>
          <li>GitHub：<a href="https://github.com/Ryan774" target="_blank" rel="noopener noreferrer">github.com/Ryan774</a></li>
        </ul>
        
        <h2>关于本站</h2>
        <p>
          本站基于Next.js和Tailwind CSS构建，采用静态生成方式部署。文章内容使用Markdown格式编写，通过灵活的组件系统展示。
        </p>
      </div>
    </div>
  );
} 