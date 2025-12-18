'use client';

import Link from 'next/link';
import { useState, FormEvent } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span>
                  </li>
                  <li>
                    <a href="tel:+23923929210">
                      <span className="icon icon-phone"></span>
                      <span className="text">+2 392 3929 210</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@yourdomain.com">
                      <span className="icon icon-envelope"></span>
                      <span className="text">info@yourdomain.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Recent Blog</h2>
              <div className="block-21 mb-4 d-flex">
                <div
                  className="blog-img mr-4"
                  style={{ backgroundImage: "url('/images/image_1.jpg')" }}
                ></div>
                <div className="text">
                  <h3 className="heading">
                    <Link href="/blog/1">Even the all-powerful Pointing has no control about</Link>
                  </h3>
                  <div className="meta">
                    <div><span className="icon-calendar"></span> June 27, 2019</div>
                    <div><span className="icon-person"></span> Admin</div>
                    <div><span className="icon-chat"></span> 19</div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-5 d-flex">
                <div
                  className="blog-img mr-4"
                  style={{ backgroundImage: "url('/images/image_2.jpg')" }}
                ></div>
                <div className="text">
                  <h3 className="heading">
                    <Link href="/blog/2">Even the all-powerful Pointing has no control about</Link>
                  </h3>
                  <div className="meta">
                    <div><span className="icon-calendar"></span> June 27, 2019</div>
                    <div><span className="icon-person"></span> Admin</div>
                    <div><span className="icon-chat"></span> 19</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li>
                  <Link href="/">
                    <span className="ion-ios-arrow-round-forward mr-2"></span>Home
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="ion-ios-arrow-round-forward mr-2"></span>About
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <span className="ion-ios-arrow-round-forward mr-2"></span>Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <span className="ion-ios-arrow-round-forward mr-2"></span>Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="ion-ios-arrow-round-forward mr-2"></span>Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Subscribe Us!</h2>
              <form onSubmit={handleSubscribe} className="subscribe-form">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control mb-2 text-center"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input type="submit" value="Subscribe" className="form-control submit px-3" />
                </div>
              </form>
            </div>
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2 mb-0">Connect With Us</h2>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li className="ftco-animate">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy; {currentYear} All rights reserved | This template is made with{' '}
              <i className="icon-heart" aria-hidden="true"></i> by{' '}
              <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

