import React, { useState } from 'react';

// A reusable SVG logo component.
const Logo = () => (
  <svg
    height="32"
    width="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-cyan-400"
  >
    <path
      d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 7L12 12L22 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22V12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// The main application component
const Header = () => {
  // State to track the active navigation link for styling
  const [activeLink, setActiveLink] = useState('Home');
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Array of navigation links
  const navLinks = ['Home', 'About', 'Skills', 'Education', 'Work'];

  // Function to handle smooth scrolling to a section
  const handleLinkClick = (event, link) => {
    event.preventDefault(); // Roka default link behavior ko
    setActiveLink(link);
    setIsMobileMenuOpen(false); // Mobile menu band karein

    // Section ID banayein (e.g., 'About' -> 'about')
    const sectionId = link.toLowerCase();
    const section = document.getElementById(sectionId);

    if (section) {
      // Header ki height 80px (h-20) hai, isliye scroll ko offset karein
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Smoothly scroll karein
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="bg-gray-800/80 backdrop-blur-sm shadow-lg fixed top-0 left-0 w-full z-50 font-sans transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 min-w-0"> {/* Adjusted for better mobile responsiveness */}
            {/* Left side: Logo and Name */}
            <div className="flex items-center space-x-3 min-w-0"> {/* Adjusted for better mobile responsiveness */}
              <Logo />
              <span className="text-xl font-bold text-gray-100 truncate">
                Muhammad Faiz
              </span>
            </div>

            {/* Right side: Desktop Navigation Links (md aur usse bari screens par dikhega) */}
            <nav className="hidden md:flex">
              <ul className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={(e) => handleLinkClick(e, link)}
                      className={`text-lg font-medium transition-all duration-300 relative group
                      ${activeLink === link
                          ? 'text-cyan-400'
                          : 'text-gray-300 hover:text-cyan-400'
                        }`}
                    >
                      {link}
                      <span className={`absolute left-0 -bottom-2.5 block h-1 rounded-full bg-cyan-400 transition-all duration-300 ease-out 
                        ${activeLink === link ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile menu button (sirf md se choti screens par dikhega) */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-lg p-2 transition-all duration-300"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel: isko display none kar ke gayab kiya gaya hai */}
        <div
          className={`md:hidden fixed inset-0 z-40 bg-gray-800/90 shadow-lg transition-transform duration-300 ease-out transform
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          
            <div className="h-20 flex items-center pl-4 sm:pl-6 lg:pl-8">
            </div>
      
          <div className="container mx-auto px-4 pt-2 pb-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`block px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-300 
                  ${activeLink === link
                      ? 'bg-gray-700 text-cyan-400'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                    }`}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
  );
};

export default Header;
