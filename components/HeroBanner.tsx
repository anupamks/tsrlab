'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroBannerProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
}

export default function HeroBanner({
  title,
  breadcrumbs,
  backgroundImage = '/images/bg_1.jpg',
}: HeroBannerProps) {
  return (
    <section
      className="relative py-24 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80">
            {breadcrumbs.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                {item.href ? (
                  <Link 
                    href={item.href}
                    className="hover:text-white transition-colors uppercase text-sm tracking-wider"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="uppercase text-sm tracking-wider">{item.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="ion-ios-arrow-forward text-xs"></span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
