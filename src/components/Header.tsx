import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Sparkles } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#rooms', label: 'Rooms' },
    { href: '#restaurant', label: 'Restaurant' },
    { href: '#events', label: 'Events' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Fixed Top Contact Bar - Always Visible */}
      <div className="fixed top-0 w-full bg-maroon-700 text-white py-2 px-4 text-xs z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={12} />
              <span>+977 1-4417123</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={12} />
              <span>info@namaskarregency.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-xs">
            <Sparkles size={12} className="text-yellow-400" />
            <span>Thamel, Kathmandu | Premium Location</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - Moves to top on scroll */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'top-8 bg-white shadow-lg py-2' 
          : 'top-8 bg-white/95 backdrop-blur-sm py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-maroon-700 to-maroon-800 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <div>
                  <h1 className="text-xl font-serif font-bold text-maroon-700">
                    Namaskar <span className="text-yellow-600">Regency</span>
                  </h1>
                  <p className="text-xs text-slate-500">Luxury & Comfort</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-slate-700 hover:text-maroon-700 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-30"></div>
                <span className="relative">Book Room</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button className="group relative bg-gradient-to-r from-maroon-700 to-red-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-maroon-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-30"></div>
                <span className="relative">Book Event</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-700 hover:text-maroon-700 p-2"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-maroon-700 block px-3 py-2 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 mt-4">
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                  Book Room
                </button>
                <button className="bg-gradient-to-r from-maroon-700 to-red-800 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                  Book Event
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;