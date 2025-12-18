'use client';

const services = [
  {
    icon: 'flaticon-analysis',
    title: 'Business Analysis',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    icon: 'flaticon-business',
    title: 'Business Consulting',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    icon: 'flaticon-insurance',
    title: 'Business Insurance',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    icon: 'flaticon-money',
    title: 'Global Investigation',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    icon: 'flaticon-rating',
    title: 'Audit & Evaluation',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    icon: 'flaticon-search-engine',
    title: 'Marketing Strategy',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
];

interface ServicesProps {
  showHeading?: boolean;
}

export default function Services({ showHeading = true }: ServicesProps) {
  return (
    <section className="ftco-section">
      <div className="container">
        {showHeading && (
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <h2 className="mb-4">Our Best Services</h2>
              <p>
                Separated they live in. A small river named Duden flows by their place and
                supplies it with the necessary regelialia. It is a paradisematic country
              </p>
            </div>
          </div>
        )}
        <div className="row no-gutters">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 d-flex">
              <div
                className={`services-2 text-center ftco-animate ${
                  index % 3 === 0 ? 'noborder-left' : ''
                } ${index >= 3 ? 'noborder-bottom' : ''}`}
              >
                <div className="icon mt-2 d-flex justify-content-center align-items-center">
                  <span className={service.icon}></span>
                </div>
                <div className="text media-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

