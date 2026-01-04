'use client';

import React, { useState } from 'react';
import SendIcon from './icons/send.svg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#fef3f2] to-white">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center space-y-4 md:space-y-5 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs font-bold tracking-[0.15em] text-[#ff3333] uppercase">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827]">
            Schedule A Call
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#4b5563] px-4">
            Let's discuss how we can help your business grow.<br />
            Schedule a consultation call with our team today.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={`max-w-3xl mx-auto space-y-6 md:space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white px-4 md:px-6 py-3.5 md:py-5 rounded-lg md:rounded-xl border border-gray-200 focus:outline-none focus:border-[#ff3333] focus:ring-2 focus:ring-[#ff3333]/20 text-sm md:text-base text-[#1f2937] placeholder:text-[#9ca3af] transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white px-4 md:px-6 py-3.5 md:py-5 rounded-lg md:rounded-xl border border-gray-200 focus:outline-none focus:border-[#ff3333] focus:ring-2 focus:ring-[#ff3333]/20 text-sm md:text-base text-[#1f2937] placeholder:text-[#9ca3af] transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-white px-4 md:px-6 py-3.5 md:py-5 rounded-lg md:rounded-xl border border-gray-200 focus:outline-none focus:border-[#ff3333] focus:ring-2 focus:ring-[#ff3333]/20 text-sm md:text-base text-[#1f2937] placeholder:text-[#9ca3af] transition-all"
            />
            <input
              type="url"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleChange}
              className="bg-white px-4 md:px-6 py-3.5 md:py-5 rounded-lg md:rounded-xl border border-gray-200 focus:outline-none focus:border-[#ff3333] focus:ring-2 focus:ring-[#ff3333]/20 text-sm md:text-base text-[#1f2937] placeholder:text-[#9ca3af] transition-all"
            />
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white font-semibold text-sm md:text-base shadow-lg shadow-[#ff3333]/30 hover:shadow-xl hover:shadow-[#ff3333]/40 hover:scale-105 transition-all duration-300"
            >
              Schedule A Call
              <SendIcon className="w-4 h-4" style={{ color: '#ffffff' }} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}