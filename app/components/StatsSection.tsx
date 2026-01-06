'use client';

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { value: 'PhD-Led', label: 'Research & analytics expertise' },
  { value: 'IIT / IIM', label: 'Founders & Advisors' },
  { value: '10 +', label: 'AI-Native Research Products Under-development' },
  { value: 'Multi-Market', label: 'India • Middle East • Global' }
]; 

export default function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-2 md:gap-3 transition-all duration-500 ${
                index % 2 !== 0 ? 'md:border-l lg:border-l border-[#f3f4f6]' : ''
              } ${index > 1 ? 'lg:border-l' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#ff3333]">{stat.value}</h3>
              <p className="text-[8px] md:text-[9px] font-bold tracking-widest text-[#6b7280] uppercase text-center px-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}