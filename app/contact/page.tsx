'use client';

import HeroBanner from '@/components/HeroBanner';
import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Contact Form:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message sent successfully!');
  };

  return (
    <>
      <HeroBanner
        title="Contact Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row d-flex mb-5 contact-info justify-content-center">
            <div className="col-md-8">
              <div className="row mb-5">
                <div className="col-md-4 text-center py-4">
                  <div className="icon">
                    <span className="icon-map-o"></span>
                  </div>
                  <p>
                    <span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016
                  </p>
                </div>
                <div className="col-md-4 text-center border-height py-4">
                  <div className="icon">
                    <span className="icon-mobile-phone"></span>
                  </div>
                  <p>
                    <span>Phone:</span>{' '}
                    <a href="tel://1234567920">+ 1235 2355 98</a>
                  </p>
                </div>
                <div className="col-md-4 text-center py-4">
                  <div className="icon">
                    <span className="icon-envelope-o"></span>
                  </div>
                  <p>
                    <span>Email:</span>{' '}
                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row block-9 justify-content-center mb-5">
            <div className="col-md-8 mb-md-5">
              <h2 className="text-center">
                If you got any questions <br />
                please do not hesitate to send us a message
              </h2>
              <form onSubmit={handleSubmit} className="bg-light p-5 contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    cols={30}
                    rows={7}
                    className="form-control"
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="ftco-section ftco-no-pb ftco-no-pt">
        <div className="container-fluid px-0">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div
                id="map"
                className="bg-white"
                style={{
                  height: '400px',
                  background: '#f8f9fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

