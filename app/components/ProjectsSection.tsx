'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ArrowRightCircleIcon from './icons/arrow-right-circle.svg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    id: 1,
    title: 'Competitive Landscape Assessment for Market Entry in the UAE',
    description: 'Consumer Delivery Company - Dubai, UAE',
    image: '/images/Dubai.jpg',
  },
  {
    id: 2,
    title: 'Customer Insights Tracking & User Feedback Analysis Report',
    description: 'AgTech Startup - Gurgaon, India',
    image: '/images/Gurgaon.jpg',
  },
  {
    id: 3,
    title: 'Stakeholder Mapping & Stakeholder Engagement Strategy',
    description: 'Sustainability Organization - Global',
    image: '/images/Global.jpg',
  },
  {
    id: 4,
    title: 'Company Turnaround and Go-to-Market Pitch Redesign',
    description: 'Digital Solutions Company - Jaipur, India',
    image: '/images/Jaipur(1).jpg',
  },
];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e2345] mb-4">
            Our Recent Engagements
          </h2>
          <p className="text-base md:text-lg text-[#1e2345]/70 max-w-3xl mx-auto">
            A snapshot of our recent research and advisory works for startups, sustainability organization, consumer delivery company and others
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`} />
              
              {/* Content */}
              <div className={`absolute inset-0 flex flex-col justify-end p-8 transition-all duration-300 ${hoveredId === project.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-white/90">
                  {project.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-[#ff3333] rounded-2xl transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}