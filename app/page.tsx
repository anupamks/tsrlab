'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Lazy load HomeSlider to reduce initial bundle size (Swiper is large)
const HomeSlider = dynamic(() => import('@/components/HomeSlider'), {
  ssr: true,
  loading: () => <div className="h-[600px] md:h-[70vh] bg-gray-200 animate-pulse" />,
});

// Lazy load components below the fold
const Counter = dynamic(() => import('@/components/Counter'), {
  loading: () => <div className="py-16 bg-gray-100 animate-pulse" />,
});

const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="py-16 animate-pulse" />,
});

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="py-16 animate-pulse" />,
});

const QuoteForm = dynamic(() => import('@/components/QuoteForm'), {
  loading: () => <div className="py-16 bg-gray-100 animate-pulse" />,
});

const BlogList = dynamic(() => import('@/components/BlogList'), {
  loading: () => <div className="py-16 animate-pulse" />,
});

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="py-16 bg-gray-50 animate-pulse" />,
});

const features = [
  { 
    icon: 'flaticon-search-engine', 
    title: 'AI x Research', 
    description: 'We deliver GenAI-powered research workshops for professionals. We partner with organizations to design high-quality surveys and interview guides with AI-charged speed and expert-led methodological rigor'
  },
  { 
    icon: 'flaticon-analysis', 
    title: 'Market Research', 
    description: 'We help organizations access first-hand market intelligence from target groups, consumers, and competitors through primary and secondary research'
  },
  { 
    icon: 'flaticon-collaboration', 
    title: 'Policy & Economic Research', 
    description: 'We partner with donors, research institutes, and government to deliver research projects on policy design, evaluation, international benchmarking, and policy brief development. Our AI-integrated research framework bridges academic research with policy making processes'
  },
  { 
    icon: 'flaticon-handshake', 
    title: 'Executive Advisory', 
    description: 'We enable government and private sector leaders to make informed decisions through data-driven insights, reports, executive briefs, benchmarking studies, and thought leadership.'
  },
];

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  return (
    <>
      {/* Hero Section - Carousel Slider */}
      <HomeSlider />

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Features */}
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Main Features
              </h2>
              <p className="text-gray-600 mb-8">
                Explore our range of data, advisory, market research, and public sector consulting services to help your organization grow
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const isActive = activeFeature === index;
                  return (
                    <div 
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? 'bg-primary text-white shadow-xl' 
                          : 'bg-white border border-gray-100 hover:shadow-lg hover:border-primary/20'
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                        isActive ? 'bg-white/20' : 'bg-primary/10'
                      }`}>
                        <span className={`${feature.icon} text-2xl ${isActive ? 'text-white' : 'text-primary'}`}></span>
                      </div>
                      <h3 className={`text-lg font-bold mb-2 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm ${isActive ? 'text-white/80' : 'text-gray-600'}`}>
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Success Story Card */}
            <div className="relative" data-aos="fade-left">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/about-home.jpg"
                    alt="About us"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Join our upcoming AIxResearch Workshop
                  </h3>
                  <p className="text-gray-600 mb-4">
                  We are conducting a series of hands-on workshops for professionals and academicians across social sciences, economics, management, public policy, and market research consulting. 
                  Express your interest here
                  </p>
                
                  <a 
                    href="https://forms.gle/3DhuivR5PJKghuxT9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Express your interest
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Counter Section */}
      <Counter />

      {/* Services Section */}
      <Services />

      {/* CTA Section - Banner */}
      {/* <section className="relative py-12 bg-fixed">
        <Image
          src="/images/bg_3.jpg"
          alt="CTA background"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              You Always Get the Best Guidance
            </h2>
          </div>
        </div>
      </section> * */}

      <section 
        className="ftco-intro ftco-no-pb img" 
        style={{ backgroundImage: "url('/images/bg_1.jpg')" }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-9 col-md-8 d-flex align-items-center heading-section heading-section-white ftco-animate">
              <h2 className="mb-0">You Always Get the Best Guidance</h2>
            </div>
            <div className="col-lg-3 col-md-4 d-flex align-items-center justify-content-end ftco-animate">
              <a href="#" className="btn btn-white py-3 px-4">Request Quote</a>
            </div>
          </div>
        </div>
      </section>
      <Projects fullWidth={true} />

      {/* Quote Form Section */}
      <QuoteForm />

      {/* Blog Section */}
      <BlogList limit={3} bgLight={true} />

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
}
