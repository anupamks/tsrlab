'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const slides = [
  {
    image: '/images/bg_1.jpg',
    subheading: 'Welcome to Consolve',
    heading: 'We Are The Best Consulting Agency',
  },
  {
    image: '/images/bg_2.jpg',
    subheading: "Todays Talent, Tomorrow's Success",
    heading: 'We Help to Grow Your Business',
  },
];

export default function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-slider owl-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="slider-item"
          style={{ 
            backgroundImage: `url(${slide.image})`,
            display: index === currentSlide ? 'block' : 'none'
          }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row no-gutters slider-text align-items-center justify-content-start"
              data-scrollax-parent="true"
            >
              <div className="col-md-7 ftco-animate">
                <span className="subheading">{slide.subheading}</span>
                <h1 className="mb-4">{slide.heading}</h1>
                <p>
                  <Link href="/services" className="btn btn-primary px-4 py-3 mt-3">
                    Our Services
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

