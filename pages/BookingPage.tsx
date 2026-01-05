
import React, { useState } from 'react';
import { verifyContactAuthenticity, sendAutomatedConfirmations } from '../lib/verification';

const BookingPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isDemo, setIsDemo] = useState(false);
  const [status, setStatus] = useState<'idle' | 'verifying' | 'sending' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [verificationUrls, setVerificationUrls] = useState<{ title: string; uri: string }[]>([]);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    goal: ''
  });

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '01:00 PM', '02:00 PM', '03:00 PM', 
    '04:00 PM', '05:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.time || !formData.date) {
      alert("Please select a date and time.");
      return;
    }

    setErrorMessage('');
    setStatus('verifying');

    // 1. ACTUAL NETWORK SCAN (Powered by Gemini Search)
    const result = await verifyContactAuthenticity(formData.email, formData.phone, formData.goal);
    
    if (result.urls) {
      setVerificationUrls(result.urls);
    }

    if (!result.emailValid && !result.phoneValid) {
      setStatus('error');
      setErrorMessage("Network Check Failed: Our records show no active accounts matching these contact points.");
      return;
    }

    // 2. DISPATCH (EmailJS / Demo Mode)
    setStatus('sending');
    const dispatch = await sendAutomatedConfirmations(formData);

    if (dispatch.success) {
      setIsDemo(!!dispatch.demo);
      setSubmitted(true);
      setStatus('idle');
    } else {
      setStatus('error');
      setErrorMessage(`Delivery Failed: ${dispatch.error || 'Server error'}. Please verify your EmailJS keys in lib/verification.ts.`);
    }
  };

  return (
    <div className="animate-fade-in py-16 md:py-24 bg-offWhite min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <span className="bg-aqua/10 text-aqua px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] border border-aqua/30 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-aqua animate-ping"></span>
              Carrier & Database Sync Active
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-darkBlue mb-4 tracking-tight">Strategy Call Access</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We perform actual carrier pings and web lookups to verify your details before granting access to our calendar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-[3.5rem] shadow-2xl shadow-slate-300/50 border border-slate-100 overflow-hidden">
          {!submitted ? (
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 bg-darkBlue p-12 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-aqua">System Check</h3>
                  <div className="space-y-8">
                    <div className={`flex gap-4 items-center transition-all ${status === 'verifying' ? 'translate-x-2' : 'opacity-100'}`}>
                      <div className={`w-8 h-8 rounded-full border-2 border-aqua/30 border-t-aqua ${status === 'verifying' ? 'animate-spin' : ''}`} />
                      <span className="text-sm font-bold">Network Verification</span>
                    </div>
                    <div className={`flex gap-4 items-center transition-all ${status === 'sending' ? 'translate-x-2' : 'opacity-40'}`}>
                      <div className={`w-8 h-8 rounded-full border-2 border-white/30 border-t-white ${status === 'sending' ? 'animate-spin' : ''}`} />
                      <span className="text-sm font-bold">Priority Dispatch</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                      <input type="text" name="firstName" required onChange={handleInputChange} className="w-full px-4 py-3 bg-offWhite border border-slate-200 rounded-xl focus:outline-none focus:border-aqua transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                      <input type="text" name="lastName" required onChange={handleInputChange} className="w-full px-4 py-3 bg-offWhite border border-slate-200 rounded-xl focus:outline-none focus:border-aqua transition-colors" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                      <input type="email" name="email" required onChange={handleInputChange} className="w-full px-4 py-3 bg-offWhite border border-slate-200 rounded-xl focus:outline-none focus:border-aqua transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                      <input type="tel" name="phone" required onChange={handleInputChange} className="w-full px-4 py-3 bg-offWhite border border-slate-200 rounded-xl focus:outline-none focus:border-aqua transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date</label>
                      <input type="date" name="date" required onChange={handleInputChange} className="w-full px-4 py-3 bg-offWhite border border-slate-200 rounded-xl focus:outline-none focus:border-aqua transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Time</label>
                      <select name="time" required onChange={handleInputChange} className="w-full px-4 py-3 bg-offWhite border border-slate-200 rounded-xl focus:outline-none focus:border-aqua transition-colors">
                        <option value="">Select a slot</option>
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Business Goal</label>
                    <textarea name="goal" rows={3} onChange={handleInputChange} className="w-full px-4 py-3 bg-offWhite border border-slate-200 rounded-xl focus:outline-none focus:border-aqua transition-colors" placeholder="e.g. Scaling listing volume..."></textarea>
                  </div>

                  <button type="submit" disabled={status !== 'idle'} className="w-full bg-aqua text-white py-5 rounded-full font-bold text-lg hover:bg-darkBlue transition-all shadow-lg shadow-aqua/20 disabled:opacity-50">
                    {status === 'idle' ? 'Secure My Spot' : 'System Processing...'}
                  </button>
                  
                  {errorMessage && (
                    <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl font-medium border border-red-100">
                      {errorMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          ) : (
            <div className="text-center py-24 px-12">
              <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-4xl font-extrabold text-darkBlue mb-4">You're Booked!</h2>
              <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
                The network verification was successful. A calendar invite has been dispatched to <span className="font-bold">{formData.email}</span>.
              </p>
              {isDemo && (
                <div className="inline-block px-6 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-bold border border-amber-100 mb-8">
                  Demo Mode Active: Confirmation Email Simulated
                </div>
              )}
              <div className="bg-offWhite p-6 rounded-2xl border border-slate-100 max-w-sm mx-auto mb-8">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Appointment details</p>
                <p className="text-darkBlue font-bold">{formData.date} at {formData.time}</p>
              </div>

              {/* Grounding Source Attribution as required by Gemini Search Tool */}
              {verificationUrls.length > 0 && (
                <div className="mt-8 pt-8 border-t border-slate-100 text-left max-w-md mx-auto">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Verification Sources</p>
                  <div className="flex flex-wrap gap-2">
                    {verificationUrls.map((url, idx) => (
                      <a 
                        key={idx} 
                        href={url.uri} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[10px] bg-slate-50 hover:bg-aqua/10 hover:text-aqua px-3 py-1 rounded-full transition-colors flex items-center gap-1 border border-slate-100"
                      >
                        {url.title || 'Source'} 
                        <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
