'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    id: 1,
    backgroundImage: '/images/bg_1.jpg',
    subheading: 'TSR Lab',
    title: 'Reliable. Valid. AI Speed Research',
    subtitle: 'That keeps your organization ahead',
    buttonText: 'Our Services',
    buttonLink: '/services',
  },
  {
    id: 2,
    backgroundImage: '/images/bg_2.jpg',
    subheading: 'Todays Talent, Tommorow Success',
    title: 'We Help to Grow Your Business',
    buttonText: 'Our Services',
    buttonLink: '/services',
  },
];

export default function HomeSlider() {
  return (
    <section className="home-slider relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-primary',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
        }}
        navigation={true}
        className="h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="slider-item relative h-full w-full"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
            >
              <div className="overlay absolute inset-0 bg-black/30"></div>
              <div className="container mx-auto px-4 h-full">
                <div className="row flex items-center justify-start h-full">
                  <div className="col-md-7 max-w-2xl relative z-10" data-aos="fade-up">
                    <span className="subheading block text-white uppercase tracking-wider text-sm font-bold mb-4">
                      {slide.subheading}
                    </span>
                    <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      {slide.title}
                      {slide.subtitle && <span> {slide.subtitle}</span>}
                    </h1>
                    <p className="mt-3">
                      <Link 
                        href={slide.buttonLink}
                        className="btn btn-primary inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                      >
                        {slide.buttonText}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

