'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    image: '/images/person_1.jpg',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Racky Henderson',
    position: 'Father',
  },
  {
    image: '/images/person_2.jpg',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Henry Dee',
    position: 'Businesswoman',
  },
  {
    image: '/images/person_3.jpg',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Mark Huff',
    position: 'Businessman',
  },
  {
    image: '/images/person_4.jpg',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Rodel Golez',
    position: 'CEO',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Clients Says
          </h2>
          <p className="text-gray-600">
            Separated they live in. A small river named Duden flows by their place and supplies
            it with the necessary regelialia. It is a paradisematic country
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
          {testimonials.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-xl p-6 shadow-lg transition-all duration-300
                ${index === 1 ? 'md:scale-105 md:shadow-xl' : 'md:opacity-80'}
              `}
            >
              <div className="flex items-start gap-4">
                {/* Avatar with Lazy Loading */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  {/* Quote Icon */}
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <span className="icon-quote-left text-primary text-sm"></span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.text}
                  </p>
                  
                  <p className="font-bold text-gray-900">{item.name}</p>
                  <span className="text-primary text-sm">{item.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
