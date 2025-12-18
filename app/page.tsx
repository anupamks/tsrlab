import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

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
  { icon: 'flaticon-collaboration', title: 'Organization', active: true },
  { icon: 'flaticon-analysis', title: 'Risk Analysis', active: false },
  { icon: 'flaticon-search-engine', title: 'Marketing Strategy', active: false },
  { icon: 'flaticon-handshake', title: 'Capital Market', active: false },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <Image
          src="/images/bg_1.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <span className="text-white/80 uppercase tracking-wider text-sm mb-4 block">
              Welcome to Consolution
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We Are The Best Consulting Agency
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-xl">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                On her way she met a copy. The copy warned the Little Blind Text, that
                where it came from it would have been rewritten a thousand times and
                everything that was left from its origin would be the word.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-xl transition-all duration-300 ${
                      feature.active 
                        ? 'bg-primary text-white shadow-xl' 
                        : 'bg-white border border-gray-100 hover:shadow-lg hover:border-primary/20'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                      feature.active ? 'bg-white/20' : 'bg-primary/10'
                    }`}>
                      <span className={`${feature.icon} text-2xl ${feature.active ? 'text-white' : 'text-primary'}`}></span>
                    </div>
                    <h3 className={`text-lg font-bold mb-2 ${feature.active ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={feature.active ? 'text-white/80' : 'text-gray-600'}>
                      Far far away, behind the word mountains, far from the countries Vokalia.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Story Card */}
            <div className="relative" data-aos="fade-left">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/about.jpg"
                    alt="About us"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Read Our Success Story for Inspiration
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Far far away, behind the word mountains, far from the countries Vokalia
                    and Consonantia, there live the blind texts.
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
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <Counter />

      {/* Services Section */}
      <Services />

      {/* CTA Section */}
      <section className="relative py-16 bg-fixed">
        <Image
          src="/images/bg_1.jpg"
          alt="CTA background"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
              You Always Get the Best Guidance
            </h2>
            <Link 
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
