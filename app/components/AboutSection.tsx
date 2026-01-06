'use client';

import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="about" className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-20">
          {/* Left Image */}
          <div className={`flex-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <Image
              src="/images/about-image.svg"
              alt="Team discussion"
              width={560}
              height={450}
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>

          {/* Right Content */}
          <div className={`flex-1 space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e2345]">
              Join our upcoming  AI x Research Workshop
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-[#4b5563] leading-relaxed">
              We are conducting a series of hands-on workshops for professionals and academicians across social sciences, economics, management, public policy, and market research consulting. Express your interest here.
            </p>

            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScdPT7RcgASMgqo2x1DgnfW4eNbjnlhzDhf1F4umcyROPkTOw/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">
                Express Your Interest
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}