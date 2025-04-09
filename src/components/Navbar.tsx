
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white pt-4 pb-2">
      <div className="container mx-auto px-4">
        <nav className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="bg-black w-6 h-6"></div>
            <div className="text-md">your name</div>
          </div>

          <div className="hidden md:flex ml-auto gap-4">
            {['Home', 'Projects', 'Articles', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm hover:opacity-80"
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
