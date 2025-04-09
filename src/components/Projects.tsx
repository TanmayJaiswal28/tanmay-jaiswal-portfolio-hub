
import { Code, ArrowRight } from 'lucide-react';

const projectsData = [
  {
    title: "HTML Only Portfolio",
    description: "A clean portfolio built with semantic HTML only.",
    icon: <Code size={20} />,
  },
  {
    title: "Calculator",
    description: "A functional calculator with basic operations.",
    icon: <Code size={20} />,
  },
  {
    title: "Quiz App",
    description: "Interactive quiz application with score tracking.",
    icon: <Code size={20} />,
  },
  {
    title: "Conditions Timer",
    description: "Custom timer with conditional triggers.",
    icon: <Code size={20} />,
  },
  {
    title: "Product Upcoming Page",
    description: "Landing page for upcoming product launch.",
    icon: <Code size={20} />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-portfolio-primary/10 rounded-full text-portfolio-primary">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-portfolio-dark">{project.title}</h3>
                </div>
                
                <p className="text-portfolio-gray mb-4">{project.description}</p>
                
                <div className="flex justify-end">
                  <button className="text-portfolio-primary hover:text-portfolio-secondary flex items-center gap-1 font-medium transition-colors">
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
