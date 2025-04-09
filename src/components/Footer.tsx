
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">© all rights reserved {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
