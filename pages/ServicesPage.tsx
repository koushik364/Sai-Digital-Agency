import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="bg-darkBlue pt-24 pb-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Our High-ROI Solutions</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Strategic digital systems designed to turn cold traffic into consistent revenue.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            
            {/* Service Block 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-aqua font-bold uppercase tracking-widest text-sm mb-4 block">01 / Lead Generation</span>
                <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-6">Targeted Lead Generation</h2>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  Most leads are just window shoppers. We use specific psychographic targeting to find people actively looking for what you offer—whether that's selling their home, finding a coach, or scaling their firm.
                </p>
                <div className="bg-offWhite p-6 rounded-2xl mb-8">
                  <h4 className="font-bold text-darkBlue mb-4">Best for:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-aqua" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Real Estate Professionals looking for listings
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-aqua" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      High-ticket consultants selling $5k+ programs
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-aqua" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      B2B service providers
                    </li>
                  </ul>
                </div>
                <Link to="/book" className="inline-block bg-darkBlue text-white px-8 py-4 rounded-full font-bold hover:bg-aqua transition-colors">Get Started</Link>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="https://picsum.photos/seed/service1/800/600" alt="Lead Gen" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Service Block 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="https://picsum.photos/seed/service2/800/600" alt="Funnels" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-aqua font-bold uppercase tracking-widest text-sm mb-4 block">02 / Sales Funnels</span>
                <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-6">High-Conversion Funnels</h2>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  A website is like a brochure; a funnel is like a sales person. We design linear customer journeys that take a stranger and move them towards a booked call or purchase without distractions.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 border border-slate-100 rounded-xl">
                    <h5 className="font-bold text-darkBlue text-sm">Conversion Focused</h5>
                    <p className="text-xs text-slate-500">Optimized layout & copy.</p>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-xl">
                    <h5 className="font-bold text-darkBlue text-sm">Mobile First</h5>
                    <p className="text-xs text-slate-500">Lightning fast on all devices.</p>
                  </div>
                </div>
                <Link to="/book" className="inline-block bg-darkBlue text-white px-8 py-4 rounded-full font-bold hover:bg-aqua transition-colors">Optimize Your Funnel</Link>
              </div>
            </div>

            {/* Service Block 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-aqua font-bold uppercase tracking-widest text-sm mb-4 block">03 / Paid Advertising</span>
                <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-6">Omnichannel Paid Ads</h2>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  We manage your Meta (Facebook/Instagram), Google Search, and YouTube campaigns. No more guessing which platform works—we find where your buyers are and dominate that space.
                </p>
                <div className="flex items-center gap-6 mb-8 text-darkBlue/40">
                  <span className="font-bold border-r pr-6 border-slate-200">META</span>
                  <span className="font-bold border-r pr-6 border-slate-200">GOOGLE</span>
                  <span className="font-bold">YOUTUBE</span>
                </div>
                <Link to="/book" className="inline-block bg-darkBlue text-white px-8 py-4 rounded-full font-bold hover:bg-aqua transition-colors">Start Scaling</Link>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="https://picsum.photos/seed/service3/800/600" alt="Paid Ads" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Service Block 4: Website Building */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="https://picsum.photos/seed/website/800/600" alt="Websites" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-aqua font-bold uppercase tracking-widest text-sm mb-4 block">04 / Website Building</span>
                <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-6">High-Performance Websites</h2>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  Most websites are slow and don't work on mobile. We build lightning-fast, SEO-optimized digital homes for your business that look stunning and perform even better on search engines.
                </p>
                <div className="bg-offWhite p-6 rounded-2xl mb-8">
                  <h4 className="font-bold text-darkBlue mb-4">Core Features:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-aqua" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      Sub-2 second load times
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-aqua" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      Advanced SEO architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-aqua" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                      Fully responsive mobile design
                    </li>
                  </ul>
                </div>
                <Link to="/book" className="inline-block bg-darkBlue text-white px-8 py-4 rounded-full font-bold hover:bg-aqua transition-colors">Build My Site</Link>
              </div>
            </div>

            {/* Service Block 5: Video Editing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-aqua font-bold uppercase tracking-widest text-sm mb-4 block">05 / Video Editing</span>
                <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-6">High-Engagement Content</h2>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  In today's market, video is the #1 way to build trust. We turn your raw footage into viral-style Reels, TikToks, and high-ticket Video Sales Letters (VSLs) that keep your audience hooked.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 border border-slate-100 rounded-xl">
                    <h5 className="font-bold text-darkBlue text-sm">Retention-Focused</h5>
                    <p className="text-xs text-slate-500">Edits that lower drop-off.</p>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-xl">
                    <h5 className="font-bold text-darkBlue text-sm">VSL Production</h5>
                    <p className="text-xs text-slate-500">Sales-driven storytelling.</p>
                  </div>
                </div>
                <Link to="/book" className="inline-block bg-darkBlue text-white px-8 py-4 rounded-full font-bold hover:bg-aqua transition-colors">Start Creating</Link>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="https://picsum.photos/seed/video/800/600" alt="Video Editing" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Service Block 6: Logo Creation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="https://picsum.photos/seed/branding/800/600" alt="Logo Design" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-aqua font-bold uppercase tracking-widest text-sm mb-4 block">06 / Logo & Branding</span>
                <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-6">Iconic Brand Identity</h2>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  Your logo is the face of your business. We design professional, memorable brand identities that convey authority and build immediate trust with your high-ticket prospects.
                </p>
                <div className="bg-offWhite p-6 rounded-2xl mb-8">
                  <h4 className="font-bold text-darkBlue mb-4">Includes:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-aqua" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Custom Logo Design (3 Concepts)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-aqua" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Brand Color Palette & Typography
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-aqua" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Social Media Brand Kit
                    </li>
                  </ul>
                </div>
                <Link to="/book" className="inline-block bg-darkBlue text-white px-8 py-4 rounded-full font-bold hover:bg-aqua transition-colors">Elevate My Brand</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing/Closing */}
      <section className="py-24 bg-offWhite border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-darkBlue mb-6">Ready for a Strategic Partner?</h2>
          <p className="text-slate-600 mb-12">
            Every business is unique. We don't offer generic packages. We offer customized solutions based on your specific growth goals and market competition.
          </p>
          <Link to="/book" className="bg-aqua text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-darkBlue transition-all shadow-xl shadow-aqua/20">
            Get Your Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;