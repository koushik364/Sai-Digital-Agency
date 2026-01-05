import React, { useState } from 'react';
import { sendAutomatedConfirmations } from '../lib/verification';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    industry: 'Real Estate',
    spend: '$0 (Just starting)',
    goal: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Send all individual fields so EmailJS can use them as variables
    const result = await sendAutomatedConfirmations({
      ...formData,
      message: `Inquiry via Contact Page`
    });

    if (result.success) {
      setSubmitted(true);
    } else {
      setError('Something went wrong. Please try again or book directly via the "Book a Call" page.');
    }
    setLoading(false);
  };

  return (
    <div className="animate-fade-in py-24 bg-offWhite min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-darkBlue mb-8 leading-tight">
              Let's Scale Your <span className="text-aqua">Business</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Book your free 15-minute growth strategy call. No pressure, no pitch—just a clear roadmap on how we'd help you scale.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-aqua/10 text-aqua flex items-center justify-center rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-darkBlue">15-Minute Audit</h4>
                  <p className="text-slate-500 text-sm">A quick look into your current funnel and ad performance.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-aqua/10 text-aqua flex items-center justify-center rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-darkBlue">Predictable Blueprint</h4>
                  <p className="text-slate-500 text-sm">See the exact steps needed to hit your monthly lead goals.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-aqua/10 text-aqua flex items-center justify-center rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-darkBlue">Expert Q&A</h4>
                  <p className="text-slate-500 text-sm">Ask us anything about Meta ads, Google ads, or automation.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-darkBlue text-white rounded-2xl border-l-4 border-aqua">
              <p className="text-sm italic opacity-80">
                "This call was the turning point for our agency. In 15 minutes, they identified a leak in our funnel that was costing us $2,000 a month."
              </p>
              <p className="text-xs font-bold mt-4 uppercase text-aqua tracking-widest">— Mark T., Consultant</p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            {!submitted ? (
              <>
                <h3 className="text-2xl font-bold text-darkBlue mb-8">Quick Inquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        name="fullName"
                        required 
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-offWhite border border-slate-200 rounded-xl focus:outline-none focus:border-aqua transition-colors" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Business Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-offWhite border border-slate-200 rounded-xl focus:outline-none focus:border-aqua transition-colors" 
                        placeholder="john@company.com" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Industry</label>
                    <select 
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-offWhite border border-slate-200 rounded-xl focus:outline-none focus:border-aqua transition-colors"
                    >
                      <option>Real Estate</option>
                      <option>Coaching / Consulting</option>
                      <option>E-commerce</option>
                      <option>B2B Services</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Current Monthly Ad Spend</label>
                    <select 
                      name="spend"
                      value={formData.spend}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-offWhite border border-slate-200 rounded-xl focus:outline-none focus:border-aqua transition-colors"
                    >
                      <option>$0 (Just starting)</option>
                      <option>Under $1,000</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">What is your #1 growth goal?</label>
                    <textarea 
                      name="goal"
                      rows={4} 
                      value={formData.goal}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-offWhite border border-slate-200 rounded-xl focus:outline-none focus:border-aqua transition-colors" 
                      placeholder="Tell us what you're looking to achieve..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-aqua text-white py-5 rounded-full font-bold text-lg hover:bg-darkBlue transition-all shadow-lg shadow-aqua/20 disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : 'Submit Inquiry'}
                  </button>
                  
                  {error && (
                    <p className="text-center text-red-500 text-sm mt-4 font-medium">{error}</p>
                  )}
                  
                  <p className="text-center text-xs text-slate-400 mt-4">We respect your privacy. No spam, ever.</p>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-darkBlue mb-4">Request Received!</h3>
                <p className="text-slate-600 mb-8">
                  We've received your inquiry. One of our growth strategists will reach out to you within the next 24 hours to discuss your roadmap.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-aqua font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;