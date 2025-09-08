"use client"

import { useState, useEffect } from "react";
import { GithubIcon, Twitter, Linkedin, Instagram, ArrowRight, MessageCircleHeart } from "lucide-react";

// This is the main Hero component, now with the animated background integrated.
const Hero = () => {
  const [particles, setParticles] = useState([]);

  // Generate random particles for background animation
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          x: (particle.x + particle.speedX + 100) % 100,
          y: (particle.y + particle.speedY + 100) % 100,
        }))
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-400 opacity-60 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(59, 130, 246, 0.5)`,
            }}
          />
        ))}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          {particles.map((particle, index) => {
            const nearbyParticles = particles.filter((p, i) => {
              if (i === index) return false;
              const distance = Math.sqrt(
                Math.pow(p.x - particle.x, 2) + Math.pow(p.y - particle.y, 2)
              );
              return distance < 15;
            });

            return nearbyParticles.map((nearbyParticle, nearbyIndex) => (
              <line
                key={`${index}-${nearbyIndex}`}
                x1={`${particle.x}%`}
                y1={`${particle.y}%`}
                x2={`${nearbyParticle.x}%`}
                y2={`${nearbyParticle.y}%`}
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1"
                className="animate-pulse"
              />
            ));
          })}
        </svg>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-20 h-20 border border-blue-400 opacity-20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 right-32 w-16 h-16 border border-purple-400 opacity-20 animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 rounded-full animate-pulse"></div>
      </div>
      
      {/* Main Content of Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <section id="home" className="font-sans flex items-center justify-center w-full">
          <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-24">
            {/* Left Column: Text Content */}
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 font-bold text-white">
                Hi There,
                <br />
                I'm Muhammad <span className="text-orange-500">Faiz</span>.
              </h1>
              <p className="mb-8 leading-relaxed text-lg text-gray-300">
                I Am Into Web Development
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start w-full">
                <button onClick={scrollToAbout} className="inline-flex items-center text-white bg-indigo-600 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-700 rounded-full text-lg font-semibold transition-colors duration-300 mb-4 sm:mb-0">
                  About Me
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
              {/* Social Media Icons */}
              <div className="flex mt-8 space-x-4">
                <a href="www.linkedin.com/in/muhammad-faiz-9b3541240" className="text-white bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="https://x.com/Faizfahim511" className="text-white bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors duration-300">
                  <Twitter size={24} />
                </a>
                <a href="https://www.instagram.com/i._.faiiz?igsh=MTNpNnpmb2R4dXhoeQ==" className="text-white bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors duration-300">
                  <Instagram size={24} />
                </a>
                <a href="https://github.com/ifaiz21" className="text-white bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors duration-300">
                  <GithubIcon size={24} />
                </a>
                <a href="https://wa.me/qr/4RG7OSAUIKLKA1" className="text-white bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors duration-300">
                  <MessageCircleHeart size={24} />
                </a>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded-full border-8 border-white shadow-2xl mx-auto"
                alt="Muhammad Faiz"
                src="./Images/dp.jpeg"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/500x500/E2E8F0/374151?text=Image+Error'; }}
              />
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-fast {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-fast {
          animation: spin-fast 2s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default Hero;
