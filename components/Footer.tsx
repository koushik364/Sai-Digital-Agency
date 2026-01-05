
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkBlue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-extrabold flex items-center gap-3 mb-6">
              <Logo className="w-10 h-10" />
              <div className="flex flex-col leading-none">
                <span className="text-xl">SAI <span className="text-aqua">DIGITAL</span></span>
                <span className="text-[10px] tracking-[0.2em] text-slate-400 font-bold uppercase">Agency</span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Helping Real Estate Professionals, Coaches, and Business Owners attract high-quality leads and scale using smart, ROI-focused solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/services" className="hover:text-aqua transition-colors">Lead Generation</Link></li>
              <li><Link to="/services" className="hover:text-aqua transition-colors">Funnels & Landing Pages</Link></li>
              <li><Link to="/services" className="hover:text-aqua transition-colors">Paid Ads Strategy</Link></li>
              <li><Link to="/services" className="hover:text-aqua transition-colors">CRM Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/about" className="hover:text-aqua transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-aqua transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-aqua transition-colors">Book a Call</Link></li>
              <li><Link to="/" className="hover:text-aqua transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Stay Connected</h4>
            <p className="text-slate-400 text-sm mb-4">Get the latest ROI-focused marketing tips in your inbox.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/10 border border-white/20 px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-aqua transition-colors text-sm"
              />
              <button className="bg-aqua px-4 py-2 rounded-r-md hover:bg-aqua/90 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Sai Digital Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-aqua">Privacy Policy</a>
            <a href="#" className="hover:text-aqua">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
