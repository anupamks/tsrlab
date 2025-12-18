'use client';

import { useEffect, useState } from 'react';

const testimonials = [
  {
    image: '/images/person_1.jpg',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Racky Henderson',
    position: 'Father',
  },
  {
    image: '/images/person_2.jpg',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Henry Dee',
    position: 'Businesswoman',
  },
  {
    image: '/images/person_3.jpg',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Mark Huff',
    position: 'Businessman',
  },
  {
    image: '/images/person_4.jpg',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Rodel Golez',
    position: 'CEO',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push({ ...testimonials[index], isCenter: i === 1 });
    }
    return items;
  };

  return (
    <section className="ftco-section testimony-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center heading-section ftco-animate">
            <h2 className="mb-4">Our Clients Says</h2>
            <p>
              Separated they live in. A small river named Duden flows by their place and supplies
              it with the necessary regelialia. It is a paradisematic country
            </p>
          </div>
        </div>
        <div className="row ftco-animate justify-content-center">
          <div className="col-md-12">
            <div className="testimonial-carousel">
              {getVisibleTestimonials().map((item, index) => (
                <div key={index} className={`item ${item.isCenter ? 'center' : ''}`}>
                  <div className="testimony-wrap d-flex">
                    <div
                      className="user-img"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="text pl-4">
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                      <p>{item.text}</p>
                      <p className="name">{item.name}</p>
                      <span className="position">{item.position}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .testimonial-carousel {
          display: flex;
          gap: 30px;
          justify-content: center;
          overflow: hidden;
        }
        .item {
          flex: 0 0 calc(33.333% - 20px);
          opacity: 0.7;
          transform: scale(0.9);
          transition: all 0.3s ease;
        }
        .item.center {
          opacity: 1;
          transform: scale(1);
        }
        @media (max-width: 991px) {
          .item {
            flex: 0 0 100%;
            display: none;
          }
          .item.center {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}

