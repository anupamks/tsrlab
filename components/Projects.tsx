'use client';

import Link from 'next/link';
import Image from 'next/image';

const projects = [
  { id: 1, image: '/images/Home.png', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 2, image: '/images/2.png', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 3, image: '/images/3.png', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 4, image: '/images/4.png', title: 'Branding & Illustration Design', category: 'Web Design' },
  
];

interface ProjectsProps {
  showHeading?: boolean;
  limit?: number;
  fullWidth?: boolean;
}

export default function Projects({ showHeading = true, limit, fullWidth = false }: ProjectsProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-16 md:py-24">
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-4'}>
        {showHeading && (
          <div className="max-w-2xl mx-auto text-center mb-12 px-4" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Recent Projects
            </h2>
            {/* <p className="text-gray-600">
              Separated they live in. A small river named Duden flows by their place and
              supplies it with the necessary regelialia. It is a paradisematic country
            </p> */}
          </div>
        )}
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${fullWidth ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4`}>
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative aspect-square overflow-hidden rounded-lg"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Background Image with Lazy Loading */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 z-10" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 z-20">
                <Link
                  href={`/projects/${project.id}`}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 
                             hover:bg-primary hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <h3 className="text-lg font-bold text-white text-center mb-1">
                  <Link href={`/projects/${project.id}`}>{project.title}</Link>
                </h3>
                <span className="text-white/70 text-sm">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
