'use client';

const services = [
  {
    icon: 'flaticon-analysis',
    title: 'Policy Benchmarking',
    description: 'We benchmark global policy frameworks and best practices to support evidence-based policy scoping, design, and strategic decision-making.',
  },
  {
    icon: 'flaticon-rating',
    title: 'Schemes & Policy Evaluation',
    description: 'We conduct data-driven evaluations of government schemes using surveys, ethnographic research, and performance tracking to identify gaps and inform course correction.',
  },
  {
    icon: 'flaticon-search-engine',
    title: 'Opinion Tracking',
    description: 'We analyze public opinion, social media sentiment, and topical associations using AI × Research workflows to help policymakers identify authoritative actors and engage credible stakeholders.',
  },
  {
    icon: 'flaticon-collaboration',
    title: 'Policy Research Support',
    description: 'We partner with research organizations across the full research lifecycle—design, implementation, analysis, and delivery—ensuring methodological rigor and actionable outcomes.',
  },
  {
    icon: 'flaticon-handshake',
    title: 'Research Workshops & Training',
    description: 'We deliver hands-on AI × Research workshops that enable researchers and academics to apply no-code Generative AI tools across real-world research workflows.',
  },
  {
    icon: 'flaticon-business',
    title: 'Market Insights',
    description: 'We produce evidence-based market intelligence through market sizing, competitor benchmarking, driver analysis, vendor scanning, and stakeholder profiling.',
  },
  {
    icon: 'flaticon-analysis',
    title: 'Market & Consumer Field Research',
    description: 'We design and execute primary research—including surveys, expert interviews, focus groups, and mystery shopping—to generate decision-ready insights.',
  },
  {
    icon: 'flaticon-rating',
    title: 'Customer Feedback Intelligence',
    description: 'We deploy real-time customer feedback intelligence systems to surface recurring concerns, track sentiment shifts, and inform continuous product and design improvement.',
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
              Ways We Help Clients
            </h2>
            <p className="text-gray-600">
              Explore our range of data, advisory, market research, and public sector consulting services
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                p-8 text-center bg-white border border-gray-100
                hover:shadow-xl hover:-translate-y-1 hover:bg-primary hover:border-primary
                transition-all duration-300 cursor-pointer group
                ${index % 3 !== 2 ? 'lg:border-r-0' : ''}
                ${index < 3 ? 'border-b-0 lg:border-b' : ''}
              `}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <span className={`${service.icon} text-primary group-hover:text-white text-4xl transition-colors`}></span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
