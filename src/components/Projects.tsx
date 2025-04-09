
const projectsData = [
  {
    title: "HTML Only Portfolio",
  },
  {
    title: "Calculator",
  },
  {
    title: "Quiz App",
  },
  {
    title: "Countdown Timer",
  },
  {
    title: "Product Upcoming Page",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mb-0">
      <div className="container mx-auto px-0">
        <table className="table-layout">
          <tbody>
            <tr>
              <td className="w-1/3">
                <div className="handwritten section-title">Projects</div>
                {projectsData.map((project, index) => (
                  <div key={index} className="py-2 text-sm">
                    {project.title}
                  </div>
                ))}
              </td>
              
              <td className="w-1/3">
                <div className="handwritten section-title">Work Experience</div>
                <div className="mb-2">
                  <div className="font-bold text-sm">roadmap.sh</div>
                  <p className="text-sm">Solved all the frontend projects.</p>
                  <a href="#" className="text-xs text-blue-500 hover:underline">Visit my Profile</a>
                </div>
                
                <div className="mt-4">
                  <div className="handwritten font-bold text-sm">Open-Source Work</div>
                  <p className="text-sm">Contributed to 50 opensource projects. Made my own projects with 200 GitHub Stars!</p>
                  <a href="#" className="text-xs text-blue-500 hover:underline">Visit my GitHub Profile</a>
                </div>
              </td>
              
              <td className="w-1/3">
                <div className="handwritten section-title">Education</div>
                <p className="text-sm mb-4">
                  Graduated with 3.76 out of 4 CGPA. Won Acme Hackathon. Organized 30 sessions.
                </p>
                
                <p className="text-sm mb-2">Courses I took:</p>
                <ul className="list-none text-sm">
                  <li>- Object Oriented Programming</li>
                  <li>- Data Structures and Algorithms</li>
                  <li>- Web Development</li>
                  <li>- Artificial Intelligence</li>
                  <li>- Human Computer Interaction</li>
                  <li>- Computer Graphics</li>
                  <li>- Database Management Systems</li>
                  <li>- Distributed Database Systems</li>
                  <li>- Discrete Mathematics</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div className="my-4">
          <div className="handwritten section-title text-center mb-4">Reviews from my Teachers</div>
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3].map((review) => (
              <div key={review} className="border border-gray-300 rounded-md p-4 max-w-[250px]">
                <p className="text-sm mb-4">
                  John doe was a brilliant student; always stood out with his assignments.
                </p>
                <p className="text-sm text-gray-600">Jane Doe</p>
                <p className="text-xs text-gray-500">Assistant Professor</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
