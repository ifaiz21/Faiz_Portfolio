import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Twitter, ChevronRight, MailIcon, MessageCircleIcon } from 'lucide-react';

const SocialIcon = ({ href, children }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition-all duration-300"
    >
        {children}
    </a>
);

const Footer = () => {
    const quickLinks = ["Home", "About", "Skills", "Education", "Work"];

    // UPDATED: Smooth scroll ke liye function banaya gaya hai
    const handleQuickLinkClick = (event, link) => {
        event.preventDefault();
        const sectionId = link.toLowerCase();
        const section = document.getElementById(sectionId);

        if (section) {
            // Header ki height (80px) ko minus karein taake section title na chupe
            const headerOffset = 80; 
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="bg-gray-900 text-white font-sans pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Portfolio Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Faiz's Portfolio</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Thank you for visiting my personal portfolio website. Connect with me over socials. Keep Rising 🦄. Connect with me over live chat!
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map(link => (
                                <li key={link}>
                                    {/* UPDATED: href aur onClick ko update kiya gaya hai */}
                                    <a 
                                        href={`#${link.toLowerCase()}`} 
                                        onClick={(e) => handleQuickLinkClick(e, link)}
                                        className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                                    >
                                        <ChevronRight className="h-5 w-5 mr-2 text-cyan-400" /> {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info (Social Links ko aage theek kareinge) */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 text-cyan-400" />
                                <span>+92 314-4367511</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-3 text-cyan-400" />
                                <span>mohammadfaiz1971@gmail.com</span>
                            </li>
                            <li className="flex items-center">
                                <MapPin className="h-5 w-5 mr-3 text-cyan-400" />
                                <span>Lahore, Pakistan-54000</span>
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-6">
                            <SocialIcon href="https://www.linkedin.com/in/muhammad-faiz-9b3541240/">
                                <Linkedin className="h-5 w-5" />
                            </SocialIcon>
                            <SocialIcon href="https://github.com/ifaiz21">
                                <Github classname="h-5 w-5"/>
                            </SocialIcon>
                            <SocialIcon href="https://x.com/Faizfahim511">
                                <Twitter classname="h-5 w-5"/>
                            </SocialIcon>
                            <SocialIcon href="mailto:mohammadfaiz1971@gmail.com">
                                <MailIcon classname="h-5 w-5"/>
                            </SocialIcon>
                            <SocialIcon href="https://wa.me/qr/4RG7OSAUIKLKA1">
                                <MessageCircleIcon classname="h-5 w-5"/>
                            </SocialIcon>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-6 text-center text-gray-500">
                    <p>Designed By <a href="https://www.linkedin.com/in/muhammad-faiz-9b3541240/" className="text-cyan-400 hover:underline">Muhammad Faiz</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;