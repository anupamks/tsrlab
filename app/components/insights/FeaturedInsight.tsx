import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CalendarIcon from '../icons/calendar.svg';
import ClockIcon from '../icons/clock.svg';
import DotIcon from '../icons/dot-separator.svg';
import ArrowRightIcon from '../icons/arrow-right-read.svg';

export default function FeaturedInsight() {
  return (
    <section className="space-y-10">
      {/* Section Header */}
      <div className="space-y-2">
        <p className="text-xs font-bold tracking-widest uppercase text-[#ff3333]">
          Featured Insight
        </p>
        <h2 className="text-4xl font-bold text-gray-900">
          Latest Research & Analysis
        </h2>
        <p className="text-lg text-gray-600">
          Stay informed with our expert insights on business trends, strategies, and
          industry developments.
        </p>
      </div>

      {/* Featured Article Card */}
      <div 
        className="relative rounded-3xl overflow-hidden"
        style={{
          boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Image
          src="/images/insights/featured-insight.jpg"
          alt="Featured Insight"
          width={1392}
          height={500}
          className="w-full h-[500px] object-cover"
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(0deg, rgba(17,24,39,1) 0%, rgba(17,24,39,0.4) 50%, rgba(17,24,39,0) 100%)',
          }}
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-12 space-y-4 text-white">
          <span className="inline-block bg-gradient-to-r from-[#ff3333] to-[#f97316] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
            Industry Analysis
          </span>
          
          <h3 className="text-4xl font-bold">
            The Future of Business Consulting
          </h3>

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-3 h-3.5" style={{ color: '#d1d5db' }} />
              <span>March 20, 2024</span>
            </div>
            <DotIcon className="w-1 h-1" style={{ color: '#9ca3af' }} />
            <div className="flex items-center gap-2">
              <ClockIcon className="w-3.5 h-3.5" style={{ color: '#d1d5db' }} />
              <span>10 min read</span>
            </div>
          </div>

          <p className="text-lg text-gray-200 max-w-3xl">
            As businesses navigate an increasingly complex landscape, consulting
            services are evolving to meet new challenges. This comprehensive analysis
            explores emerging trends, technologies, and methodologies shaping the futu…
          </p>

          <Link 
            href="/article/the-future-of-business-consulting"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-all"
          >
            Read More
            <ArrowRightIcon className="w-3.5 h-3" style={{ color: '#ff3333' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}