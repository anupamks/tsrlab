import HeroBanner from '@/components/HeroBanner';
import Counter from '@/components/Counter';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - TSR Lab',
  description: 'Learn more about TSR Lab - the best consulting agency helping businesses grow.',
};

export default function AboutPage() {
  return (
    <>
      <HeroBanner
        title="About Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About us' },
        ]}
      />

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Welcome to TSR Lab
              </h2>
              <p className="text-gray-600 mb-4">
                At TSR Lab, impactful decisions start with reliable and valid data. We bring decision making insights to you, through surveys, advanced analytics, and data-driven storytelling.
              </p>
              <p className="text-gray-600 mb-4">
                We combine scientific research methodologies, rigorous analysis, and trusted data sources with expert oversight to help organizations plan, validate, and communicate decisions.
              </p>
              <p className="text-gray-600">
                Our innovative products and GenAI integrated research flows deliver instant intelligence on your customer, competitor, and market factors. We prepare you for today, tomorrow, and the day after.
              </p>
            </div>

            {/* Success Story Card */}
            <div className="relative" data-aos="fade-left">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/about.jpg')" }}
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Join our upcoming AI x Research Bootcamp
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts. Separated they
                    live in Bookmarksgrove right at the coast of the Semantics.
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

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div 
              className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-cover bg-center group"
              style={{ backgroundImage: "url('/images/about.jpg')" }}
              data-aos="fade-right"
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
              <a
                href="https://vimeo.com/45830194"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="ion-ios-play text-primary text-3xl ml-1"></span>
                </div>
              </a>
            </div>

            {/* Content */}
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Innovate Market Research with Cutting Edge AI Solutions
              </h2>
              <p className="text-gray-600 mb-4">
                We Fasttrack Economic and Policy Research with GenAI embedded research methodologies
              </p>
              <p className="text-gray-600 mb-4">
                At TSR Lab, impactful decisions start with reliable and valid data. We bring decision making insights to you, through surveys, advanced analytics, and data-driven storytelling.
              </p>
              <p className="text-gray-600">
                We combine scientific research methodologies, rigorous analysis, and trusted data sources with expert oversight to help organizations plan, validate, and communicate decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Counter */}
      {/* <Counter /> */}

      {/* Testimonials */}
      {/* <Testimonials /> */}
    </>
  );
}
