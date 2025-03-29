import Head from 'next/head';
import Link from 'next/link';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>RHan - 个人博客</title>
        <meta name="description" content="RHan的个人博客网站" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 flex-grow py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
} 