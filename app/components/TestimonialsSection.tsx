'use client';

import React from 'react';
import Image from 'next/image';
import QuoteIcon from './icons/quote.svg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    quote: '"TSRLab completely transformed our IT infrastructure. Their team was professional, responsive, and incredibly knowledgeable. Highly recommended!"',
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: '/images/client-1.jpg',
  },
  {
    quote: '"Outstanding service and support. TSRLab helped us migrate to the cloud seamlessly. Our productivity has increased significantly since partnering with them."',
    name: 'Michael Chen',
    role: 'CTO, CloudBase Solutions',
    image: '/images/client-2.jpg',
  },
  {
    quote: '"The custom software they developed for us has been a game-changer. TSRLab truly understands business needs and delivers exceptional results."',
    name: 'Emily Rodriguez',
    role: 'Director, FinTech Innovations',
    image: '/images/client-3.jpg',
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center space-y-4 md:space-y-5 mb-12 md:mb-16 lg:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs font-bold tracking-[0.15em] text-[#ff3333] uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827]">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 space-y-6 md:space-y-8 lg:space-y-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <QuoteIcon className="absolute -top-2 -right-2 w-6 h-5 md:w-8 md:h-6" style={{ color: '#ffedd5' }} />
                <p className="text-sm md:text-base lg:text-lg text-[#4b5563] leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-[#111827]">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] md:text-xs text-[#6b7280]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}