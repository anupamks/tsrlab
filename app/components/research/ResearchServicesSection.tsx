import React from 'react';
import SearchIcon from '../icons/search.svg';
import ChartPieIcon from '../icons/chart-pie.svg';
import ChipIcon from '../icons/chip.svg';
import BriefcaseIcon from '../icons/briefcase.svg';
import UsersChartIcon from '../icons/users-chart.svg';
import DocumentIcon from '../icons/document.svg';
import BulletPointIcon from '../icons/bullet-point.svg';

export default function ResearchServicesSection() {
  const services = [
    {
      icon: SearchIcon,
      title: 'Market Research',
      description: 'Comprehensive market research solutions to understand industry trends, customer behavior, and competitive landscape.',
      items: ['Industry Analysis', 'Consumer Insights', 'Competitive Intelligence', 'Market Sizing'],
    },
    {
      icon: ChartPieIcon,
      title: 'Data Analysis & Insights',
      description: 'Transform raw data into actionable insights to drive business intelligence and strategic decision-making.',
      items: ['Statistical Analysis', 'Predictive Modeling', 'Data Visualization', 'Performance Metrics'],
    },
    {
      icon: ChipIcon,
      title: 'Innovation & Tech Research',
      description: 'Stay ahead of the curve with research focused on identifying emerging trends and innovation opportunities.',
      items: ['Tech Trends Analysis', 'Innovation Assessment', 'R&D Strategy', 'Technology Scouting'],
    },
    {
      icon: BriefcaseIcon,
      title: 'Business Intelligence',
      description: 'Strategic business intelligence to support decision-making and drive organizational growth.',
      items: ['Strategic Planning', 'Risk Assessment', 'Competitive Benchmarking', 'Performance Benchmarking'],
    },
    {
      icon: UsersChartIcon,
      title: 'Competitive Analysis',
      description: 'In-depth competitive analysis to help you understand market positioning and competitive dynamics.',
      items: ['Competitor Profiling', 'Market Positioning', 'SWOT Analysis', 'Strategic Recommendations'],
    },
    {
      icon: DocumentIcon,
      title: 'Custom Research',
      description: 'Tailored research solutions designed to meet your specific business needs and objectives.',
      items: ['Custom Methodologies', 'Dedicated Research Teams', 'Flexible Engagement', 'Confidential Reports'],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-sm font-semibold tracking-wider uppercase text-[#ff3333]">
            What We Offer
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Our Research Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive research solutions tailored to help your business make informed
            decisions and achieve strategic objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 space-y-6 hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-6 h-6" style={{ color: '#ff3333' }} />
              
              <h3 className="text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              
              <p className="text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <BulletPointIcon className="w-1.5 h-1.5 flex-shrink-0" style={{ color: '#ff3333' }} />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}