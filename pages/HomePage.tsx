
import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceCardProps, AudienceCardProps, TestimonialProps } from '../types';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-aqua/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-darkBlue/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block py-1 px-4 mb-4 text-xs font-bold tracking-widest text-aqua uppercase bg-aqua/10 rounded-full">
              Results-Driven Marketing
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-darkBlue mb-8 leading-tight">
              We Turn Clicks into <span className="text-aqua">Paying Clients</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Stop wasting ad spend. We build high-converting systems for Real Estate Professionals and Coaches that deliver consistent, predictable ROI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/book" className="bg-aqua text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-aqua/90 transition-all transform hover:scale-105 shadow-xl shadow-aqua/30">
                Book Free Strategy Call
              </Link>
              <Link to="/services" className="bg-slate-100 text-darkBlue px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-200 transition-all">
                See How It Works
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
              <span className="font-bold text-lg tracking-tighter">TRUSTED BY 200+ AGENTS</span>
              <span className="font-bold text-xl">COACHING.PRO</span>
              <span className="font-bold text-xl">ELITE REALTY</span>
              <span className="font-bold text-xl">PEAK PERFORMANCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-24 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-4">Engineered For Your Growth</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We don't do generic marketing. We specialize in industries where high-ticket relationships matter most.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AudienceCard 
              category="Real Estate Agents"
              painPoint="Tired of low-quality Zillow leads?"
              solution="We generate exclusive, motivated seller leads directly through your own custom funnel."
              image="https://picsum.photos/seed/re/400/250"
            />
            <AudienceCard 
              category="Coaches & Consultants"
              painPoint="Inconsistent booking calendar?"
              solution="Automated appointment systems that qualify prospects before they ever get on a call with you."
              image="https://picsum.photos/seed/coach/400/250"
            />
            <AudienceCard 
              category="Business Owners"
              painPoint="High ad spend, zero tracking?"
              solution="Data-driven Meta and Google campaigns focused on ROI, not just 'likes' and impressions."
              image="https://picsum.photos/seed/biz/400/250"
            />
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-4">Our Core Solutions</h2>
              <p className="text-slate-600">The machinery behind your business growth. We build, manage, and optimize every stage of your customer journey.</p>
            </div>
            <Link to="/services" className="text-aqua font-bold hover:underline">View All Services →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Lead Generation"
              description="High-intent lead capture strategies tailored to your target demographic."
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            />
            <ServiceCard 
              title="Funnels & Pages"
              description="Custom landing pages optimized for maximum conversion and speed."
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
            />
            <ServiceCard 
              title="Paid Ads"
              description="Strategic Meta & Google campaigns that put your offer in front of buyers."
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>}
            />
            <ServiceCard 
              title="CRM Automation"
              description="Nurture leads while you sleep with intelligent email and SMS automation."
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-darkBlue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our 3-Step Success Framework</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Scaling a business shouldn't be complicated. We focus on three critical pillars.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t border-dashed border-white/20 -z-10 transform -translate-y-1/2"></div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-aqua rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-8 shadow-lg shadow-aqua/20">1</div>
              <h3 className="text-2xl font-bold mb-4">Attract</h3>
              <p className="text-slate-400">Targeting the right audience with magnetic ads and outreach strategies that get you noticed.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-aqua rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-8 shadow-lg shadow-aqua/20">2</div>
              <h3 className="text-2xl font-bold mb-4">Convert</h3>
              <p className="text-slate-400">Leading prospects through highly optimized funnels that build trust and drive action immediately.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-aqua rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-8 shadow-lg shadow-aqua/20">3</div>
              <h3 className="text-2xl font-bold mb-4">Scale</h3>
              <p className="text-slate-400">Implementing automation and systems that allow your business to grow without increasing your workload.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-6">Real Results for Real Partners</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                We measure our success by the growth of our clients. Our data-first approach ensures that every dollar spent is working toward your ultimate goal: revenue.
              </p>
              
              <div className="space-y-6">
                <ResultItem 
                  label="Average Return on Ad Spend"
                  value="4.8X"
                />
                <ResultItem 
                  label="Leads Generated for Clients"
                  value="12,450+"
                />
                <ResultItem 
                  label="Appointments Booked Monthly"
                  value="840+"
                />
              </div>
            </div>
            
            <div className="bg-offWhite p-8 md:p-12 rounded-3xl shadow-inner border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <img src="https://picsum.photos/seed/person1/100/100" className="w-16 h-16 rounded-full object-cover" alt="Client" />
                <div>
                  <h4 className="font-bold text-darkBlue">Sarah Jenkins</h4>
                  <p className="text-sm text-slate-500 text-xs">Principal Broker, Elite Realty</p>
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-darkBlue italic font-medium leading-relaxed mb-8">
                "Sai Digital Agency transformed our lead flow in 30 days. We went from cold calling dead numbers to having 5-6 qualified listing appointments on our calendars every single week."
              </blockquote>
              <div className="flex gap-1 text-aqua">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-darkBlue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-aqua/5 border border-white/10 rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-aqua to-transparent"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Scale Your Business?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Stop guessing and start growing. Book your free 15-minute strategy call today and we'll show you the exact roadmap to predictable clients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to="/book" className="bg-aqua text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-darkBlue transition-all shadow-xl shadow-aqua/20">
              Book Your Free Call
            </Link>
            <p className="text-slate-400 text-sm italic">Limited slots available this month</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-aqua transition-all group shadow-sm hover:shadow-xl hover:shadow-aqua/5 flex flex-col items-start">
    <div className="p-3 bg-offWhite text-aqua rounded-2xl group-hover:bg-aqua group-hover:text-white transition-colors mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-darkBlue mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm mb-6">{description}</p>
    <Link to="/services" className="mt-auto text-darkBlue font-bold text-sm group-hover:text-aqua transition-colors flex items-center gap-2">
      Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
    </Link>
  </div>
);

const AudienceCard: React.FC<AudienceCardProps> = ({ category, painPoint, solution, image }) => (
  <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
    <div className="relative h-48 overflow-hidden">
      <img src={image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={category} />
      <div className="absolute inset-0 bg-darkBlue/20"></div>
      <div className="absolute top-4 left-4 bg-white text-darkBlue px-4 py-1 rounded-full text-xs font-bold uppercase">{category}</div>
    </div>
    <div className="p-8">
      <p className="text-aqua font-bold text-sm mb-2">The Problem:</p>
      <h3 className="text-lg font-bold text-darkBlue mb-6 leading-tight">"{painPoint}"</h3>
      <div className="border-t border-slate-50 pt-6">
        <p className="text-slate-600 text-sm leading-relaxed">{solution}</p>
      </div>
    </div>
  </div>
);

const ResultItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-center py-4 border-b border-slate-100">
    <span className="text-slate-600 font-medium">{label}</span>
    <span className="text-2xl font-bold text-darkBlue">{value}</span>
  </div>
);

export default HomePage;
