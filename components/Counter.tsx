'use client';

import { useEffect, useState, useRef } from 'react';

interface CounterItem {
  number: number;
  label: string;
  icon: string;
}

const counterData: CounterItem[] = [
  { number: 705, label: 'Projects Completed', icon: 'flaticon-doctor' },
  { number: 809, label: 'Satisfied Customer', icon: 'flaticon-customer' },
  { number: 335, label: 'Awards Received', icon: 'flaticon-rating' },
  { number: 35, label: 'Years of Experience', icon: 'flaticon-business' },
];

export default function Counter() {
  const [counts, setCounts] = useState<number[]>(counterData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(counterData.map((item) => Math.floor(item.number * easeProgress)));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(counterData.map((item) => item.number));
      }
    }, interval);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('/images/bg_2.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          data-aos="fade-up"
        >
          You Always Get the Best Guidance
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counterData.map((item, index) => (
            <div 
              key={index} 
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <span className={`${item.icon} text-white text-3xl`}></span>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {counts[index].toLocaleString()}
              </div>
              <div className="text-white/70 text-sm uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
