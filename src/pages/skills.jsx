import React from 'react';
import { 
    Monitor, 
    FileCode2, 
    Orbit, 
    ServerCog, 
    Wind, 
    Database, 
    Blocks, 
    ShieldCheck,
    LayoutTemplate 
} from 'lucide-react';

// Monitor icon for the section title, now from lucide-react
const MonitorIcon = () => (
    <Monitor className="h-8 w-8 mr-3 text-white" strokeWidth={2} />
);

// A generic icon component using lucide-react icons
const SkillIcon = ({ iconName }) => {
    const commonProps = {
        className: "w-10 h-10",
        strokeWidth: 1.5
    };
    
    // Using a switch to return the appropriate lucide icon
    switch (iconName) {
        case 'JavaScript':
            return <FileCode2 {...commonProps} color="#f0db4f" />;
        case 'HTML':
            return <FileCode2 {...commonProps} color="#e34c26" />;
        case 'CSS':
            return <FileCode2 {...commonProps} color="#264de4" />;
        case 'ReactJS':
            return <Orbit {...commonProps} color="#61dafb" className="w-10 h-10 animate-spin-slow" />;
        case 'NodeJS':
            return <ServerCog {...commonProps} color="#339933" />;
        case 'TailwindCSS':
            return <Wind {...commonProps} color="#38b2ac" />;
        case 'MySQL':
            return <Database {...commonProps} color="#4479a1" />;
        case 'Python':
            return <FileCode2 {...commonProps} color="#3776ab" />;
        case 'C++':
            return <span className="text-4xl font-bold text-indigo-500">C++</span>;
        case 'WordPress':
            return <LayoutTemplate {...commonProps} color="#21759b" />;
        case 'MongoDB':
            return <Database {...commonProps} color="#47a248" />;
        case 'OOP':
            return <Blocks {...commonProps} color="#f44336" />;
        case 'SQA':
            return <ShieldCheck {...commonProps} color="#9c27b0" />;
        default:
            return <FileCode2 {...commonProps} color="#ffffff" />;
    }
};


const Skills = () => {

    const skillsData = [
        { name: "JavaScript", icon: "JavaScript" },
        { name: "HTML", icon: "HTML" },
        { name: "CSS", icon: "CSS" },
        { name: "React.js", icon: "ReactJS" },
        { name: "Node.js", icon: "NodeJS" },
        { name: "Tailwind CSS", icon: "TailwindCSS" },
        { name: "MySQL", icon: "MySQL" },
        { name: "Python", icon: "Python" },
        { name: "C++", icon: "C++" },
        { name: "WordPress", icon: "WordPress" },
        { name: "MongoDB", icon: "MongoDB" },
        { name: "OOP", icon: "OOP" },
        { name: "SQA", icon: "SQA" },
    ];

    return (
        <section id="skills" className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 font-sans py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center">
                        <MonitorIcon />
                        Skills <span className="text-cyan-400 ml-2">& Abilities</span>
                    </h2>
                </div>

                {/* Skills Grid Container */}
                <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-10 shadow-2xl border border-white/10">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {skillsData.map((skill, index) => (
                            <div key={index} className="bg-gray-800/50 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-300 border border-gray-700">
                                <div className="h-12 w-12 flex items-center justify-center mb-4">
                                    <SkillIcon iconName={skill.icon} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-100">{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;

