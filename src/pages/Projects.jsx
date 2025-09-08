import React from 'react';

// Briefcase icon for the Projects section title
const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

// Fundify Project Logo SVG
const FundifyLogo = () => (
    <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
        <path d="M12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="currentColor"/>
        <path d="M12.5 17h-1c-.55 0-1-.45-1-1v-2.5c0-.28.22-.5.5-.5s.5.22.5.5v2h1v-.5c0-.55.45-1 1-1s1 .45 1 1v1c0 1.1-.9 2-2 2z" fill="currentColor"/>
        <path d="M10 10.5a.5.5 0 01-.5-.5V8h1v2a.5.5 0 01-.5.5zM14 10.5a.5.5 0 01-.5-.5V8h1v2a.5.5 0 01-.5.5z" fill="currentColor"/>
    </svg>
);

// UK Highways Project Logo SVG
const UKHighwaysLogo = () => (
    <svg className="w-20 h-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,5 L95,27.5 L95,72.5 L50,95 L5,72.5 L5,27.5 Z" fill="#E0E0E0" stroke="#333" strokeWidth="2"/>
        <path d="M15,33 L85,33 L85,67 L15,67 Z" fill="#FFFFFF" />
        <path d="M15,42 L85,42 M15,58 L85,58" stroke="#333" strokeWidth="4" strokeDasharray="8, 8"/>
        <path d="M50,33 L50,67" stroke="#FFD700" strokeWidth="4"/>
    </svg>
);


const Projects = () => {
  // Main projects data
  const mainProjectData = [
    {
      title: "Fundify: AI-Powered Crowdfunding Platform",
      company: "MERN Stack | Web Development | AI",
      date: "Final Year Project",
      description: "A web-based platform inspired by Kickstarter. Integrated AI for campaign recommendations and fraud detection, ensuring secure transactions and real-time tracking.",
      logo: <FundifyLogo />,
      imageUrl: "./Images/funds.jpeg"
    },
    {
      title: "UK Highways Industry Platform",
      company: "MERN Stack",
      date: "Ongoing",
      description: "A subscription-based web platform for the UK highways industry, featuring jobs, courses, and business advertising. Includes automated payments, invoicing, and admin tools.",
      logo: <UKHighwaysLogo />,
      imageUrl: "./Images/high.jpeg"
    }
  ];

  // Additional personal projects from resume
  const personalProjects = [
    {
      title: "Expense Tracker App",
      tech: "React | Tailwind CSS",
      description: "Implemented CRUD operations for expenses with Chart.js for visual summaries and a responsive UI.",
      imageUrl: "https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "AI Gender Detection System",
      tech: "Python | Deep Learning (CNN)",
      description: "Developed a system to classify individuals as male or female from facial images using Convolutional Neural Networks.",
      imageUrl: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Railway Reservation System",
      tech: "SQL | MySQL",
      description: "A complete system for ticketing and passenger management, featuring automated ticketing and optimized seat allocation.",
      imageUrl: "./Images/railway.png"
    },
    {
      title: "Dynamic Portfolio App",
      tech: "HTML | CSS | JS | Django",
      description: "A basic portfolio website built using the Django framework, implementing URL routing, views, and dynamic templates.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <section id="work" className="bg-blue-50 font-sans py-16 sm:py-24 animate-fadeIn overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 flex items-center justify-center">
            <BriefcaseIcon />
            My <span className="text-blue-600 ml-2">Projects</span>
          </h2>
        </div>
        
        {/* Main Projects Section */}
        <div className="max-w-3xl mx-auto space-y-8">
          {mainProjectData.map((proj, index) => (
            <div 
                key={index} 
                className="animate-fadeInUp relative group h-80 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
                style={{ animationDelay: `${index * 150}ms`, background: `url(${proj.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-75 transition-all duration-300"></div>
                <div className="relative h-full flex flex-col justify-center items-center p-6 text-white text-center">
                    <div className="flex-shrink-0 mb-4 text-white"> {/* Made logo white to stand out */}
                        {proj.logo}
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{proj.title}</h3>
                    <p className="text-md font-semibold text-gray-200 mb-2">{proj.company}</p>
                    <p className="text-md font-bold text-green-300 mb-3">{proj.date}</p>
                    <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">{proj.description}</p>
                </div>
            </div>
          ))}
        </div>
        
        {/* Personal Projects Section */}
        <div className="mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-10">Personal Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {personalProjects.map((project, index) => (
                    <div 
                        key={index} 
                        className="animate-fadeInUp relative group h-80 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
                        style={{ animationDelay: `${index * 150}ms`, background: `url(${project.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-75 transition-all duration-300"></div>
                        <div className="relative h-full flex flex-col justify-end p-6 text-white">
                            <h4 className="text-xl font-bold mb-1">{project.title}</h4>
                            <p className="text-sm font-semibold text-cyan-300 mb-2">{project.tech}</p>
                            <p className="text-gray-200 text-sm leading-snug opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fadeInUp {
          opacity: 0; /* Start hidden */
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default Projects;