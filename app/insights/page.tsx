import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TSR Insights - Consolution',
  description: 'Explore our latest insights, research, and analysis on business trends and strategies.',
};

const insights = [
  {
    id: 1,
    title: 'Digital Transformation in Modern Business',
    category: 'Technology',
    date: 'March 15, 2024',
    excerpt: 'Discover how digital transformation is reshaping the business landscape and what it means for your organization.',
    image: '/images/image_1.jpg',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Strategic Planning for Growth',
    category: 'Strategy',
    date: 'March 10, 2024',
    excerpt: 'Learn the key principles of strategic planning that drive sustainable business growth and competitive advantage.',
    image: '/images/image_2.jpg',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Market Analysis Trends 2024',
    category: 'Research',
    date: 'March 5, 2024',
    excerpt: 'An in-depth analysis of current market trends and their implications for businesses across various industries.',
    image: '/images/image_3.jpg',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Financial Planning Best Practices',
    category: 'Finance',
    date: 'February 28, 2024',
    excerpt: 'Essential financial planning strategies that help businesses optimize their resources and maximize profitability.',
    image: '/images/image_4.jpg',
    readTime: '8 min read',
  },
  {
    id: 5,
    title: 'Innovation in Business Models',
    category: 'Innovation',
    date: 'February 20, 2024',
    excerpt: 'Exploring innovative business models that are disrupting traditional industries and creating new opportunities.',
    image: '/images/image_5.jpg',
    readTime: '6 min read',
  },
  {
    id: 6,
    title: 'Leadership in the Digital Age',
    category: 'Leadership',
    date: 'February 15, 2024',
    excerpt: 'How effective leadership adapts to the challenges and opportunities presented by the digital age.',
    image: '/images/image_6.jpg',
    readTime: '5 min read',
  },
];

const categories = [
  { name: 'All', count: 24 },
  { name: 'Technology', count: 8 },
  { name: 'Strategy', count: 6 },
  { name: 'Research', count: 5 },
  { name: 'Finance', count: 3 },
  { name: 'Innovation', count: 2 },
];

const featuredInsight = {
  title: 'The Future of Business Consulting',
  category: 'Industry Analysis',
  date: 'March 20, 2024',
  excerpt: 'As businesses navigate an increasingly complex landscape, consulting services are evolving to meet new challenges. This comprehensive analysis explores emerging trends, technologies, and methodologies shaping the future of business consulting.',
  image: '/images/bg_2.jpg',
  readTime: '10 min read',
};

export default function InsightsPage() {
  return (
    <>
      <HeroBanner
        title="TSR Insights"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'TSR Insights' },
        ]}
        backgroundImage="/images/bg_3.jpg"
      />

      {/* Featured Insight Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Featured Insight
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Research & Analysis
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with our expert insights on business trends, strategies, and industry developments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative" data-aos="fade-right">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${featuredInsight.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <span className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-semibold mb-3">
                    {featuredInsight.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {featuredInsight.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
                    <span>{featuredInsight.date}</span>
                    <span>•</span>
                    <span>{featuredInsight.readTime}</span>
                  </div>
                  <p className="text-white/90 mb-4">{featuredInsight.excerpt}</p>
                  <Link
                    href={`/blog/${featuredInsight.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Our Insights Matter
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="flaticon-analysis text-primary text-xl"></span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Data-Driven Analysis</h4>
                    <p className="text-gray-600">
                      Our insights are backed by comprehensive research and real-world data analysis.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="flaticon-search-engine text-primary text-xl"></span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Expert Perspectives</h4>
                    <p className="text-gray-600">
                      Learn from industry experts with years of experience in business consulting.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="flaticon-handshake text-primary text-xl"></span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Actionable Strategies</h4>
                    <p className="text-gray-600">
                      Get practical, actionable strategies you can implement in your business today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4" data-aos="fade-up">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`
                  px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300
                  ${index === 0
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white'
                  }
                `}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <article
                key={insight.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${insight.image}')` }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                      {insight.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>{insight.date}</span>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {insight.excerpt}
                  </p>
                  <Link
                    href={`/blog/${insight.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <span className="ion-ios-arrow-forward"></span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Subscribe to our newsletter and get the latest research, analysis, and insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Need Custom Research or Analysis?
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Our expert team can provide tailored insights and research specific to your business needs. 
              Get in touch to discuss how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-primary/30"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-block bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

