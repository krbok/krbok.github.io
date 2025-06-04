import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navigation({ activeSection, onNavClick }) {
  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Work" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <ul className="nav-ul">
      {navItems.map((item) => (
        <li key={item.href} className="nav-li">
          <a 
            className={`nav-link transition-colors duration-300 ${
              activeSection === item.href.slice(1) 
                ? 'text-white' 
                : 'text-neutral-400 hover:text-white'
            }`}
            href={item.href}
            onClick={(e) => onNavClick(e, item.href)}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll function
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(targetId);
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'experiences', 'testimonial', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Kritik
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation activeSection={activeSection} onNavClick={handleNavClick} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="pb-5">
            <Navigation activeSection={activeSection} onNavClick={handleNavClick} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
