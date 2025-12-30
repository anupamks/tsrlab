import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Services - TSR Lab',
  description: 'Comprehensive research services to help your business make informed decisions and stay ahead of the competition.',
};

const researchServices = [
  {
    icon: 'flaticon-analysis',
    title: 'AI x Research',
    description: 'GenAI-powered research workflows for professionals and institutions',
    features: ['GenAI-research workshops for professionals', 'AI-assisted survey and interview guide design
', 'Rapid data collection and synthesis', 'Computational policy research'],
  },
  {
    icon: 'flaticon-search-engine',
    title: 'Data Analytics',
    description: 'Advanced data analytics and business intelligence to transform raw data into actionable insights.',
    features: ['Statistical Analysis', 'Predictive Modeling', 'Data Visualization', 'Performance Metrics'],
  },
  {
    icon: 'flaticon-collaboration',
    title: 'Technology Research',
    description: 'Cutting-edge technology research to identify emerging trends and innovation opportunities.',
    features: ['Tech Trends Analysis', 'Innovation Assessment', 'R&D Strategy', 'Technology Scouting'],
  },
  {
    icon: 'flaticon-handshake',
    title: 'Business Intelligence',
    description: 'Strategic business intelligence to support decision-making and drive organizational growth.',
    features: ['Strategic Planning', 'Risk Assessment', 'Opportunity Analysis', 'Performance Benchmarking'],
  },
  {
    icon: 'flaticon-search-engine',
    title: 'Competitive Analysis',
    description: 'In-depth competitive analysis to understand market positioning and identify strategic advantages.',
    features: ['Competitor Profiling', 'SWOT Analysis', 'Market Positioning', 'Strategic Recommendations'],
  },
  {
    icon: 'flaticon-analysis',
    title: 'Custom Research',
    description: 'Tailored research solutions designed to meet your specific business needs and objectives.',
    features: ['Custom Methodologies', 'Dedicated Research Teams', 'Flexible Engagement', 'Confidential Reports'],
  },
];

const researchProcess = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We begin by understanding your research objectives, defining scope, and developing a comprehensive research plan.',
  },
  {
    step: '02',
    title: 'Data Collection',
    description: 'Our team employs multiple methodologies including surveys, interviews, focus groups, and data mining.',
  },
  {
    step: '03',
    title: 'Analysis & Insights',
    description: 'Advanced analytical techniques transform collected data into meaningful insights and actionable recommendations.',
  },
  {
    step: '04',
    title: 'Reporting & Delivery',
    description: 'Comprehensive reports with visualizations, executive summaries, and strategic recommendations delivered on time.',
  },
];

export default function ResearchServicesPage() {
  return (
    <>
      <HeroBanner
        title="Research Services"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Research Services' },
        ]}
      />

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Expert Research Services for Informed Decisions
              </h2>
              <p className="text-gray-600 mb-4">
                At Consolution, we provide comprehensive research services that empower businesses
                to make data-driven decisions. Our expert team combines advanced methodologies with
                industry expertise to deliver actionable insights.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you need market research, competitive analysis, or custom research solutions,
                we have the tools and expertise to help you stay ahead of the competition and identify
                new opportunities for growth.
              </p>
              <p className="text-gray-600 mb-6">
                Our research services are designed to provide you with the clarity and confidence
                needed to navigate complex business challenges and capitalize on emerging trends.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started Today
              </Link>
            </div>

            {/* Image Card */}
            <div className="relative" data-aos="fade-left">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/bg_2.jpg')" }}
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Why Choose Our Research Services?
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-1">✓</span>
                      <span>Expert team with years of research experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-1">✓</span>
                      <span>Advanced analytical tools and methodologies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-1">✓</span>
                      <span>Customized solutions for your unique needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-1">✓</span>
                      <span>Timely delivery with actionable insights</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Research Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive research solutions tailored to help your business make informed decisions
              and achieve strategic objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className={`${service.icon} text-3xl text-primary`}></span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-primary font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Research Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to delivering high-quality research that meets your objectives
              and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchProcess.map((process, index) => (
              <div 
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-4xl font-bold text-primary/20 mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {process.description}
                  </p>
                </div>
                {index < researchProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary/30 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Let our expert research team help you make informed decisions and drive your business forward.
              Contact us today to discuss your research needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Request a Consultation
              </Link>
              <Link 
                href="/services"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

