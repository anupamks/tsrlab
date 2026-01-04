'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CalendarIcon from '../icons/calendar-small.svg';
import ArrowRightIcon from '../icons/arrow-right-article.svg';

export default function InsightsContent() {
  const [activeCategory, setActiveCategory] = useState('All Insights');

  const categories = [
    { name: 'All Insights', count: 24 },
    { name: 'Technology', count: 8 },
    { name: 'Strategy', count: 6 },
    { name: 'Research', count: 5 },
    { name: 'Finance', count: 3 },
    { name: 'Innovation', count: 2 },
  ];

  const articles = [
    {
      slug: 'ai-integration-in-modern-workflow',
      category: 'TECHNOLOGY',
      image: '/images/insights/ai-integration.svg',
      date: 'Mar 18, 2024',
      readTime: '5 min read',
      title: 'AI Integration in Modern Workflow',
      description: 'Discover how artificial intelligence is reshaping daily operations and boosting productivity across sectors.',
    },
    {
      slug: 'strategic-planning-for-q2-growth',
      category: 'STRATEGY',
      image: '/images/insights/strategic-planning.svg',
      date: 'Mar 15, 2024',
      readTime: '8 min read',
      title: 'Strategic Planning for Q2 Growth',
      description: 'Key strategies to align your team and resources for maximum impact in the upcoming quarter.',
    },
    {
      slug: 'global-market-trends-2024',
      category: 'RESEARCH',
      image: '/images/insights/global-trends.svg',
      date: 'Mar 12, 2024',
      readTime: '12 min read',
      title: 'Global Market Trends 2024',
      description: 'An in-depth look at the shifting global markets and what they mean for international business.',
    },
    {
      slug: 'optimizing-cash-flow',
      category: 'FINANCE',
      image: null,
      date: 'Mar 10, 2024',
      readTime: '6 min read',
      title: 'Optimizing Cash Flow',
      description: 'Practical tips for managing liquidity and ensuring financial stability in uncertain times.',
    },
  ];

  return (
    <section className="grid lg:grid-cols-[312px_1fr] gap-12">
      {/* Left Sidebar */}
      <div className="space-y-6">
        {/* Categories */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-900">Categories</h3>
          
          <div className="space-y-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`w-full flex items-center justify-between px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === category.name
                    ? 'bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white shadow-lg'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
                style={
                  activeCategory === category.name
                    ? { boxShadow: '0px 4px 6px rgba(254, 215, 170, 0.50), 0px 10px 15px rgba(254, 215, 170, 0.50)' }
                    : {}
                }
              >
                <span>{category.name}</span>
                <span className="text-xs font-medium">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Subscribe Box */}
        <div 
          className="relative bg-gray-900 rounded-2xl p-6 space-y-2 overflow-hidden"
        >
          {/* Blur Background */}
          <div 
            className="absolute top-0 right-0 w-16 h-20 rounded-full"
            style={{
              backgroundColor: 'rgba(255, 87, 34, 0.30)',
              filter: 'blur(64px)',
            }}
          />

          <div className="relative z-10 space-y-2">
            <h3 className="text-lg font-bold text-white">Subscribe</h3>
            <p className="text-xs text-gray-400">
              Get the latest insights directly to your inbox.
            </p>

            <div className="pt-2 space-y-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2.5 bg-gray-800 text-sm text-gray-300 placeholder-gray-500 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#ff3333]"
              />
              <button className="w-full bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Articles Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            {/* Article Image or Placeholder */}
            {article.image ? (
              <Image
                src={article.image}
                alt={article.title}
                width={321}
                height={192}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="relative w-full h-48 bg-gray-200">
                <div className="absolute inset-0 bg-black/10" />
                <span className="absolute top-4 left-4 bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white px-3 py-1 rounded text-xs font-bold tracking-wide uppercase">
                  {article.category}
                </span>
              </div>
            )}

            {/* Article Content */}
            <div className="p-6 space-y-3">
              {article.image && (
                <span className="inline-block bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white px-3 py-1 rounded text-xs font-bold tracking-wide uppercase">
                  {article.category}
                </span>
              )}

              <div className="flex items-center gap-3 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-2.5 h-3" style={{ color: '#9ca3af' }} />
                  <span>{article.date}</span>
                </div>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {article.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                {article.description}
              </p>

              {article.image && (
                <Link 
                  href={`/article/${article.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff3333] hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRightIcon className="w-2.5 h-2" style={{ color: '#ff3333' }} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}