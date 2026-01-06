'use client';

import React from 'react';
import ChipIcon from './icons/chip.svg';
import SearchIcon from './icons/search.svg';
import ChartLineIcon from './icons/chart-line.svg';
import BriefcaseIcon from './icons/briefcase.svg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: ChipIcon,
    title: 'AI x Research Training',
    description: 'We run AI × Research bootcamps for market researchers, research institutions, and policy teams, covering methodologies, data collection, and GenAI-enabled research workflows.',
  },
  {
    icon: SearchIcon,
    title: 'Market Research',
    description: 'We conduct market research to understand industry trends, customer behavior, and competitive landscape for strategic decision-making.',
  },
  {
    icon: ChartLineIcon,
    title: 'Policy & Economic Research',
    description: 'We support public sector organizations with policy research, economic analysis, and impact assessments to drive informed policy decisions.',
  },
  {
    icon: BriefcaseIcon,
    title: 'Executive Advisory',
    description: 'We provide executive advisory services to support leadership with strategic insights, governance frameworks, and data-driven guidance.',
  },
];

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#f9fafb] to-white">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center space-y-4 md:space-y-5 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e2345]">
            Our Main Features
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#4b5563] max-w-3xl mx-auto px-4">
            Explore our range of data, research services and public sector consulting services to help your organization grow.
          </p>
        </div>

        {/* Features Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className={`p-6 md:p-8 lg:p-10 rounded-2xl border border-[#f3f4f6] bg-white shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4 md:space-y-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#ffedd5] rounded-xl">
                    <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: '#ff3333' }} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1e2345]">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-[#4b5563] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}