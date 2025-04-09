
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
                <p className="text-sm mb-4">
                  I have uploaded all my projects on GitHub.
                </p>
                {projectsData.map((project, index) => (
                  <div key={index} className="py-2 text-sm">
                    {project.title}
                  </div>
                ))}
                <div className="mt-4">
                  <a 
                    href="https://github.com/TanmayJaiswal28" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 hover:underline"
                  >
                    Visit my GitHub Profile
                  </a>
                </div>
              </td>
              
              <td className="w-1/3">
                <div className="handwritten section-title">Work Experience</div>
                <p className="text-sm">N/A (Currently learning)</p>
                
                <div className="mt-6">
                  <div className="handwritten section-title">Current Studies</div>
                  <p className="text-sm mb-2">
                    Currently learning Rust and have learned Java, JavaScript, HTML and CSS.
                  </p>
                  <p className="text-sm">
                    In the future, I will go ahead with blockchain and Solana.
                  </p>
                </div>
              </td>
              
              <td id="education" className="w-1/3">
                <div className="handwritten section-title">Education</div>
                <div className="mb-4">
                  <p className="text-sm font-bold">St. Aloysius High School, Kanpur</p>
                  <p className="text-sm">Current School</p>
                  <p className="text-sm">Graduation Year: 2028</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-bold">10th Board</p>
                  <p className="text-sm">Passed from ICSE</p>
                  <p className="text-sm">GPA: N/A</p>
                </div>
                
                <div id="contact" className="mt-6">
                  <div className="handwritten section-title">Contact Information</div>
                  <ul className="list-none text-sm">
                    <li className="mb-1">Email: tanmay.offcial@gmail.com</li>
                    <li className="mb-1">Mobile: 6394830737</li>
                    <li className="mb-1">
                      <a 
                        href="https://www.linkedin.com/in/tanmay-jaiswal28/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        LinkedIn Profile
                      </a>
                    </li>
                    <li className="mb-1">Location: Kanpur, India</li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Projects;
