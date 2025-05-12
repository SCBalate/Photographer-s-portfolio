import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'About', href: '/#about' },
   
    { name: 'Contact', href: '/#contact' },
    {name:'Gallery',href:'/gallery'}
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/#hero" className="text-white font-bold text-xl md:text-2xl tracking-wider">
          COOL<span className="text-amber-500">&nbsp;LENS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) =>
  link.href.startsWith('/') ? (
    <Link
      key={link.name}
      to={link.href}
      className="text-gray-300 hover:text-white transition-colors duration-300 tracking-wide text-sm uppercase"
    >
      {link.name}
    </Link>
  ) : (
    <a
      key={link.name}
      href={link.href}
      className="text-gray-300 hover:text-white transition-colors duration-300 tracking-wide text-sm uppercase"
    >
      {link.name}
    </a>
  )
)}
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-xl uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;