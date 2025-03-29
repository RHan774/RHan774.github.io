export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-text-secondary">
              RHan © {currentYear}
            </p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Ryan774" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary"
            >
              GitHub
            </a>
            <a 
              href="/rss.xml" 
              target="_blank"
              className="text-text-secondary hover:text-primary"
            >
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 