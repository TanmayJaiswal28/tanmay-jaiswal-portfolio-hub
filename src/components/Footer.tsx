
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark py-8 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p>© All rights reserved {currentYear} | Tanmay Jaiswal</p>
        
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="text-white/70 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
