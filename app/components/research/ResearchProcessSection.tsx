import React from 'react';
import LightbulbIcon from '../icons/lightbulb-idea.svg';
import DatabaseIcon from '../icons/database.svg';
import ChartLineIcon from '../icons/chart-line.svg';
import DocumentIcon from '../icons/document.svg';

export default function ResearchProcessSection() {
  const steps = [
    {
      number: '01',
      icon: LightbulbIcon,
      title: 'Discovery & Planning',
      description: 'We begin by understanding your research objectives, defining scope, and developing a comprehensive research plan.',
    },
    {
      number: '02',
      icon: DatabaseIcon,
      title: 'Data Collection',
      description: 'Our team employs multiple methodologies including surveys, interviews, focus groups, and data mining.',
    },
    {
      number: '03',
      icon: ChartLineIcon,
      title: 'Analysis & Insights',
      description: 'Advanced analytical techniques transform collected data into meaningful insights and actionable recommendations.',
    },
    {
      number: '04',
      icon: DocumentIcon,
      title: 'Reporting & Delivery',
      description: 'Comprehensive reports and visualizations ensure insights are communicated clearly and recommendations delivered on time.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-sm font-semibold tracking-wider uppercase text-[#ff3333]">
            How We Work
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Our Research Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A systematic approach to delivering high-quality research that meets your objectives and
            exceeds your expectations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 space-y-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-11 h-11 bg-gradient-to-r from-[#ff3333] to-[#f97316] rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">{step.number}</span>
              </div>

              {/* Icon */}
              <div className="pt-4">
                <step.icon className="w-4 h-6" style={{ color: '#ff3333' }} />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}