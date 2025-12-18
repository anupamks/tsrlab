'use client';

import { useState, FormEvent } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    guidance: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Quote Request:', formData);
    // Handle form submission
    setFormData({
      firstName: '',
      lastName: '',
      guidance: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section
      className="ftco-section ftco-consult ftco-no-pt ftco-no-pb"
      style={{ backgroundImage: "url('/images/bg_5.jpg')" }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-6 py-5 px-md-5">
            <div className="py-md-5">
              <div className="heading-section heading-section-white ftco-animate mb-5">
                <h2 className="mb-4">Request A Quote</h2>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia
                  and Consonantia, there live the blind texts.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="appointment-form ftco-animate">
                <div className="d-md-flex">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group ml-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="d-md-flex">
                  <div className="form-group">
                    <div className="form-field">
                      <div className="select-wrap">
                        <div className="icon">
                          <span className="ion-ios-arrow-down"></span>
                        </div>
                        <select
                          className="form-control"
                          value={formData.guidance}
                          onChange={(e) => setFormData({ ...formData, guidance: e.target.value })}
                          required
                        >
                          <option value="">Select Guidance</option>
                          <option value="finance">Finance</option>
                          <option value="business">Business</option>
                          <option value="auto-loan">Auto Loan</option>
                          <option value="real-estate">Real Estate</option>
                          <option value="other">Other Services</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group ml-md-4">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="d-md-flex">
                  <div className="form-group">
                    <textarea
                      cols={30}
                      rows={2}
                      className="form-control"
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <div className="form-group ml-md-4">
                    <input type="submit" value="Request A Quote" className="btn btn-white py-3 px-4" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

