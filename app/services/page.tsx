import HeroBanner from '@/components/HeroBanner';
import Services from '@/components/Services';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - TSR Lab',
  description: 'Explore our range of business consulting services to help your business grow.',
};

const features = [
  { icon: 'flaticon-collaboration', title: 'Organization' },
  { icon: 'flaticon-analysis', title: 'Risk Analysis' },
  { icon: 'flaticon-search-engine', title: 'Marketing Strategy' },
  { icon: 'flaticon-handshake', title: 'Capital Market' },
];

export default function ServicesPage() {
  return (
    <>
      <HeroBanner
        title="Services"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Success Story Card */}
            <div className="relative order-2 lg:order-1" data-aos="fade-right">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/about.jpg')" }}
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Read Our Success Story for Inspiration
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.
                  </p>
                  <p className="text-gray-600 mb-6">
                    On her way she met a copy. The copy warned the Little Blind Text.
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

            {/* Features */}
            <div className="order-1 lg:order-2" data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Main Features
              </h2>
              <p className="text-gray-600 mb-8">
                On her way she met a copy. The copy warned the Little Blind Text, that
                where it came from it would have been rewritten a thousand times.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className={`${feature.icon} text-2xl text-primary`}></span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Far far away, behind the word mountains, far from the countries Vokalia.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Services />
    </>
  );
}
