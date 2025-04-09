
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 py-20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark mb-6 animate-fade-in">
            Frontend Developer
          </h1>
          
          <p className="text-xl text-portfolio-gray max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Student at St. Aloysius High School, Kanpur. Coding enthusiast & always learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <button 
              onClick={scrollToProjects}
              className="btn-primary flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowDown size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown 
          size={24} 
          className="text-portfolio-primary cursor-pointer"
          onClick={scrollToProjects}
        />
      </div>
    </section>
  );
};

export default Hero;
