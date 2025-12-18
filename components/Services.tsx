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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {showHeading && (
          <div className="max-w-2xl mx-auto text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Best Services
            </h2>
            <p className="text-gray-600">
              Separated they live in. A small river named Duden flows by their place and
              supplies it with the necessary regelialia. It is a paradisematic country
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                p-8 text-center bg-white border border-gray-100
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                ${index % 3 !== 2 ? 'lg:border-r-0' : ''}
                ${index < 3 ? 'border-b-0 lg:border-b' : ''}
              `}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className={`${service.icon} text-primary text-4xl`}></span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
