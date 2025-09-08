import React from 'react';
import { UserIcon } from 'lucide-react';

const Aboutme = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 font-sans py-16 sm:py-24">
      {/* Custom CSS for the animated border */}
      <style>
        {`
        @keyframes border-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animated-border-container {
          position: relative;
          padding: 4px; /* Adjust padding to control border thickness */
          overflow: hidden;
          border-radius: 1rem; /* rounded-2xl */
        }

        .animated-border {
          content: '';
          position: absolute;
          inset: -100%;
          background: conic-gradient(
            from 0deg,
            #ff0000, /* Red */
            #ff7300, /* Orange */
            #fffb00, /* Yellow */
            #48ff00, /* Green */
            #00ffd5, /* Cyan */
            #002bff, /* Blue */
            #7a00ff, /* Indigo */
            #ff00c8, /* Pink */
            #ff0000   /* Red (to complete the loop) */
          );
          animation: border-spin 8s linear infinite; /* Adjust duration as needed */
        }
        
        .image-container {
          position: relative;
          z-index: 10;
          background: #D1D5DB; /* bg-[#D1D5DB] */
          border-radius: 1rem; /* rounded-2xl */
          padding: 1rem; /* p-4 */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-xl */
        }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center">
            <UserIcon />
            About <span className="text-blue-600 ml-2">Me</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Left Column: Image with Animated Border */}
          <div className="w-full max-w-sm lg:w-1/3">
            <div className="animated-border-container">
              <div className="animated-border"></div>
              <div className="image-container transform hover:scale-105 transition-transform duration-300">
                <img
                  className="object-cover object-center rounded-lg w-full"
                  alt="Muhammad Faiz"
                  src="./Images/dp.jpeg"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x500/CCCCCC/FFFFFF?text=Error'; }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-4xl font-bold text-[#D1D5DB] mb-2">I'm Faiz</h3>
            <p className="text-lg font-semibold text-[#D1D5DB] mb-6">
              Website Developer
            </p>
            <p className="text-base text-[#D1D5DB] leading-relaxed mb-6">
              I am Muhammad Faiz, a MERN Stack Developer based in Lahore, Pakistan, recently completed my Bachelor’s degree in Computer Science at the University of Management and Technology (UMT). I specialize in building modern, responsive, and scalable web applications using React.js, Node.js, and MongoDB. Alongside my development skills, I also have experience in Python automation and virtual assistance. As a motivated and detail-oriented developer, I focus on delivering efficient solutions, continuously learning, and applying the latest technologies to create impactful projects.
            </p>
            <div className="space-y-3 text-left inline-block">
              <p className="text-base text-[#D1D5DB]">
                <span className="font-bold text-blue-600">Email :</span> mohammadfaiz1971@gmail.com
              </p>
              <p className="text-base text-[#D1D5DB]">
                <span className="font-bold text-blue-600">Place :</span> Lahore, Pakistan - 54000
              </p>
            </div>
            <div className="mt-10 text-center lg:text-left">
              <a
                href="https://drive.google.com/file/d/1Gy_5dD2lGv_FtNlf7BdOaoPLIRrwcm6k/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white bg-indigo-600 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-700 rounded-lg text-lg font-semibold transition-transform duration-300 transform hover:translate-y-[-2px] shadow-lg"
              >
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
