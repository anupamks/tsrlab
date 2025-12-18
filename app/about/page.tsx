import HeroBanner from '@/components/HeroBanner';
import Counter from '@/components/Counter';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Consolution',
  description: 'Learn more about Consolution - the best consulting agency helping businesses grow.',
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
                Welcome to Consolution
              </h2>
              <p className="text-gray-600 mb-4">
                On her way she met a copy. The copy warned the Little Blind Text, that
                where it came from it would have been rewritten a thousand times and
                everything that was left from its origin would be the word.
              </p>
              <p className="text-gray-600 mb-4">
                A small river named Duden flows by their place and supplies it with the
                necessary regelialia. It is a paradisematic country, in which roasted
                parts of sentences fly into your mouth.
              </p>
              <p className="text-gray-600">
                On her way she met a copy. The copy warned the Little Blind Text, that
                where it came from it would have been rewritten a thousand times and
                everything that was left from its origin would be the word &quot;and&quot; and the
                Little Blind Text should turn around and return to its own, safe country.
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
                    Read Our Success Story for Inspiration
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts. Separated they
                    live in Bookmarksgrove right at the coast of the Semantics.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Contact us
                  </Link>
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
                We Are the Best Consulting Agency
              </h2>
              <p className="text-gray-600 mb-4">
                Separated they live in. A small river named Duden flows by their place
                and supplies it with the necessary regelialia. It is a paradisematic
                country. A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <p className="text-gray-600">
                A small river named Duden flows by their place and supplies it with the
                necessary regelialia. It is a paradisematic country, in which roasted
                parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Counter */}
      <Counter />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}
