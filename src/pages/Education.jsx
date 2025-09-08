import React from 'react';
import {BookIcon } from  "lucide-react";

const Education = () => {

  const educationData = [
    {
      degree: "Bachelor In Computer Sciences | BS-CS",
      institution: "University Of Management And Technology",
      date: "2021-2025 | Completed",
      logoUrl: "./Images/umt-logo.jpeg", // Replace with your logo path
      statusClass: "text-green-600 font-bold"
    },
    {
      degree: "Intermediate | ICS",
      institution: "Punjab Group Of Colleges",
      date: "2019-2021 | Completed",
      logoUrl: "./Images/punjab-logo.png", // Replace with your logo path
      statusClass: "text-green-600 font-bold"
    },
    {
      degree: "Matric | Computer sciences",
      institution: "Allied School",
      date: "2017-2019 | Completed",
      logoUrl: "./Images/allied-logo.png", // Replace with your logo path
      statusClass: "text-green-600 font-bold"
    }
  ];

  return (
    <section id="education" className="bg-gray-900 font-sans py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#D1D5DB] flex items-center justify-center">
            <BookIcon />
            My <span className="text-blue-600 ml-2">Education</span>
          </h2>
        </div>
        
        {/* Subtitle / Quote */}
        <p className="text-center text-[#D1D5DB] italic mb-12">
          "Education Is Not The Learning Of Facts, But The Training Of The Mind To Think."
        </p>

        {/* Education Cards Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-[#D1D5DB] rounded-xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex-shrink-0">
                <img 
                    src={edu.logoUrl} 
                    alt={`${edu.institution} logo`} 
                    className="h-32 w-32 object-contain"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x150/CCCCCC/FFFFFF?text=Logo'; }}
                />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>
                <p className="text-md font-semibold text-gray-600 mb-2">{edu.institution}</p>
                <p className={`text-md ${edu.statusClass}`}>{edu.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Education;
