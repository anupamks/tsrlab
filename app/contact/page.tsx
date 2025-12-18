'use client';

import HeroBanner from '@/components/HeroBanner';
import { useState, FormEvent } from 'react';

const contactInfo = [
  {
    icon: 'icon-map-o',
    title: 'Address:',
    text: 'International City, Dubai, UAE',
    link: null,
  },
  {
    icon: 'icon-phone',
    title: 'Phone:',
    text: '+971 58 591 2084',
    link: 'tel:+971585912084',
  },
  {
    icon: 'icon-envelope-o',
    title: 'Email:',
    text: 'info@electroitsolutions.com',
    link: 'mailto:info@electroitsolutions.com',
  },
];

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

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className={`${info.icon} text-primary text-2xl`}></span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-gray-600 hover:text-primary transition-colors">
                    {info.text}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.text}</p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              If you got any questions<br />
              please do not hesitate to send us a message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
              <textarea
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map - Electroitsolutions, International City, Dubai */}
      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.168507714088!2d55.37661841500756!3d25.16557998389872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f61c0e8a3b5f9%3A0x7e3b4a0b8c6d2a1e!2sInternational%20City%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1702915200000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
