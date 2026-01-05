
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-extrabold text-darkBlue tracking-tight flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <div className="flex flex-col leading-none">
                <span className="text-xl">SAI <span className="text-aqua">DIGITAL</span></span>
                <span className="text-[10px] tracking-[0.2em] text-slate-400 font-bold">AGENCY</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-darkBlue font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-slate-600 hover:text-darkBlue font-medium transition-colors">Services</Link>
            <Link to="/about" className="text-slate-600 hover:text-darkBlue font-medium transition-colors">About</Link>
            <Link to="/book" className="bg-aqua text-white px-6 py-3 rounded-full font-bold hover:bg-aqua/90 transition-all transform hover:scale-105 shadow-md shadow-aqua/20">
              Free Strategy Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-darkBlue focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-darkBlue">Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-darkBlue">Services</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-darkBlue">About</Link>
            <Link to="/book" onClick={() => setIsOpen(false)} className="block w-full bg-aqua text-white px-6 py-3 rounded-full font-bold mt-4">
              Free Strategy Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
