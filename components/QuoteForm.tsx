'use client';

import { useState, FormEvent } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    guidance: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Quote Request:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      guidance: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section
      className="relative py-16 md:py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/bg_5.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Empty space or additional content for left side */}
          <div className="hidden lg:block"></div>
          
          {/* Form */}
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Request A Quote
            </h2>
            <p className="text-gray-300 mb-8">
              Far far away, behind the word mountains, far from the countries Vokalia
              and Consonantia, there live the blind texts.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 
                             text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                             focus:ring-primary focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 
                             text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                             focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    value={formData.guidance}
                    onChange={(e) => setFormData({ ...formData, guidance: e.target.value })}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 
                               text-white appearance-none focus:outline-none focus:ring-2 
                               focus:ring-primary focus:border-transparent cursor-pointer"
                  >
                    <option value="" className="text-gray-900">Select Guidance</option>
                    <option value="finance" className="text-gray-900">Finance</option>
                    <option value="business" className="text-gray-900">Business</option>
                    <option value="auto-loan" className="text-gray-900">Auto Loan</option>
                    <option value="real-estate" className="text-gray-900">Real Estate</option>
                    <option value="other" className="text-gray-900">Other Services</option>
                  </select>
                  <span className="ion-ios-arrow-down absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none"></span>
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 
                             text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                             focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <textarea
                  placeholder="Message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 
                             text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                             focus:ring-primary focus:border-transparent resize-none"
                />
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full bg-white text-navy font-bold py-3 px-6 rounded-lg 
                               hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Request A Quote
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
