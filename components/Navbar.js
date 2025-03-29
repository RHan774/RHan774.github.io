import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              RHan
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              <Link href="/" className="nav-link">
                首页
              </Link>
              <Link href="/posts" className="nav-link">
                文章
              </Link>
              <Link href="/about" className="nav-link">
                关于
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 