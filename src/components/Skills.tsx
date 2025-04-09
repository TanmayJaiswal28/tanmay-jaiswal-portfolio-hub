
const skillsData = [
  { name: "Java", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "HTML/CSS", level: 90 },
  { name: "Rust", level: 70 },
  { name: "Blockchain", level: 65 },
  { name: "Solana", level: 60 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Current Focus</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-portfolio-dark">{skill.name}</span>
                <span className="text-portfolio-gray">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-portfolio-primary h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          {skillsData.map((skill, index) => (
            <span 
              key={index} 
              className="bg-portfolio-primary text-white px-4 py-2 rounded-full text-sm animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
