'use client';

import { useEffect, useState, useRef } from 'react';

interface CounterItem {
  number: number;
  label: string;
}

const counterData: CounterItem[] = [
  { number: 705, label: 'Projects Completed' },
  { number: 809, label: 'Satisfied Customer' },
  { number: 335, label: 'Awards Received' },
  { number: 35, label: 'Years of Experience' },
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
    <section className="ftco-counter" id="section-counter" ref={sectionRef}>
      <div className="container">
        <div className="row d-md-flex align-items-center justify-content-center">
          <div className="wrapper">
            <div className="row d-md-flex align-items-center">
              {counterData.map((item, index) => (
                <div key={index} className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="icon">
                      <span className="flaticon-doctor"></span>
                    </div>
                    <div className="text">
                      <strong className="number">{counts[index].toLocaleString()}</strong>
                      <span>{item.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

