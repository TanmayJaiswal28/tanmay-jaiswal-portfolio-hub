
const changelogData = [
  {
    date: "April 9, 2025",
    version: "v1.0.0",
    changes: [
      "Initial release of the portfolio",
      "Added personal information section",
      "Included projects from GitHub",
      "Added contact information"
    ]
  },
  {
    date: "March 25, 2025",
    version: "v0.9.0",
    changes: [
      "Beta version completed",
      "Implemented minimal UI design",
      "Added education information",
      "Created responsive layout"
    ]
  },
  {
    date: "March 10, 2025",
    version: "v0.8.0",
    changes: [
      "Alpha version released",
      "Basic structure implemented",
      "Added navigation menu",
      "Created project section"
    ]
  }
];

const Changelog = () => {
  return (
    <section id="changelog" className="py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-xl font-bold mb-8 text-center">Changelog</h2>
        
        <div className="relative border-l border-gray-300 ml-4 md:ml-6 pl-6">
          {changelogData.map((item, index) => (
            <div key={index} className="mb-10 relative">
              {/* Timeline dot */}
              <div className="absolute w-3 h-3 bg-white border-2 border-gray-300 rounded-full -left-[34px] top-1"></div>
              
              {/* Version card */}
              <div className="bg-white shadow-sm border border-gray-300 p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span className="bg-black text-white text-xs px-2 py-1">{item.version}</span>
                </div>
                
                <ul className="list-disc pl-5 space-y-1">
                  {item.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="text-sm">{change}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Changelog;
