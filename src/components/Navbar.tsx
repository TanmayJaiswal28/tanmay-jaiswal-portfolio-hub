
const Navbar = () => {
  const scrollToSection = (id: string) => {
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
            <div className="text-md">Tanmay Jaiswal</div>
          </div>

          <div className="hidden md:flex ml-auto gap-4">
            {['Home', 'Projects', 'Education', 'Changelog', 'Contact'].map((item) => (
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
