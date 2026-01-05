
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-darkBlue mb-8">We Scale Businesses with <span className="text-aqua">Strategic Precision</span></h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Sai Digital Agency was founded on a simple realization: Most business owners are over-marketed to and under-delivered for. 
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We saw too many agents and coaches wasting thousands on 'fancy websites' that didn't convert, and 'lead generators' who delivered nothing but cold, uninterested contacts. 
              </p>
              <div className="flex gap-4">
                <div className="p-4 bg-offWhite rounded-2xl">
                  <p className="text-2xl font-bold text-darkBlue">8+</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Years Experience</p>
                </div>
                <div className="p-4 bg-offWhite rounded-2xl">
                  <p className="text-2xl font-bold text-darkBlue">50M+</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Ad Spend Managed</p>
                </div>
                <div className="p-4 bg-offWhite rounded-2xl">
                  <p className="text-2xl font-bold text-darkBlue">200+</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Success Stories</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-aqua/10 rounded-3xl -rotate-2"></div>
              <img src="https://picsum.photos/seed/about/800/800" className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover" alt="Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-darkBlue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Philosophy</h2>
            <p className="text-slate-400">What makes Sai Digital Agency a different kind of partner.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-aqua/20 text-aqua rounded-xl flex items-center justify-center mb-6 font-bold text-xl">1</div>
              <h3 className="text-xl font-bold mb-4">Strategy Before Tools</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We don't just sell ads. We sell systems. Every click is useless without a path to a conversion. We build the architecture first.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-aqua/20 text-aqua rounded-xl flex items-center justify-center mb-6 font-bold text-xl">2</div>
              <h3 className="text-xl font-bold mb-4">Extreme Transparency</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                You'll never wonder if your ads are working. Our live dashboards show you exactly where your money goes and what it brings back.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-aqua/20 text-aqua rounded-xl flex items-center justify-center mb-6 font-bold text-xl">3</div>
              <h3 className="text-xl font-bold mb-4">ROI Obsession</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Likes don't pay the bills. Clicks don't scale teams. We focus on the only metric that matters: net revenue and profit growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-darkBlue mb-8">Work with a partner, not a vendor.</h2>
          <p className="text-slate-600 mb-12 text-lg">
            If you're looking for someone to just 'post on social media' or 'build a pretty site,' we aren't for you. But if you're ready to scale your operations using proven digital machinery, let's talk.
          </p>
          <Link to="/book" className="bg-aqua text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-darkBlue transition-all shadow-xl shadow-aqua/20">
            Apply to Work with Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
