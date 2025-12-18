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
      className="hero-wrap hero-wrap-2"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center">
            <h1 className="mb-2 bread">{title}</h1>
            <p className="breadcrumbs">
              {breadcrumbs.map((item, index) => (
                <span key={index} className="mr-2">
                  {item.href ? (
                    <Link href={item.href}>
                      {item.label} <i className="ion-ios-arrow-forward"></i>
                    </Link>
                  ) : (
                    <>
                      {item.label} <i className="ion-ios-arrow-forward"></i>
                    </>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

