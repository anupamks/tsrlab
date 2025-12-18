'use client';

import Link from 'next/link';

const projects = [
  { id: 1, image: '/images/project-1.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 2, image: '/images/project-2.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 3, image: '/images/project-3.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 4, image: '/images/project-4.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 5, image: '/images/project-5.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 6, image: '/images/project-6.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 7, image: '/images/project-7.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 8, image: '/images/project-8.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
];

interface ProjectsProps {
  showHeading?: boolean;
  limit?: number;
  fullWidth?: boolean;
}

export default function Projects({ showHeading = true, limit, fullWidth = false }: ProjectsProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="ftco-section ftco-no-pb">
      <div className={fullWidth ? 'container-fluid px-0' : 'container'}>
        {showHeading && (
          <div className="row no-gutters justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <h2 className="mb-4">Our Recent Projects</h2>
              <p>
                Separated they live in. A small river named Duden flows by their place and
                supplies it with the necessary regelialia. It is a paradisematic country
              </p>
            </div>
          </div>
        )}
        <div className="row no-gutters">
          {displayedProjects.map((project) => (
            <div key={project.id} className={fullWidth ? 'col-md-3' : 'col-md-4'}>
              <div
                className="project mb-4 img ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="overlay"></div>
                <Link
                  href={`/projects/${project.id}`}
                  className="btn-site d-flex align-items-center justify-content-center"
                >
                  <span className="icon-subdirectory_arrow_right"></span>
                </Link>
                <div className="text text-center p-4">
                  <h3>
                    <Link href={`/projects/${project.id}`}>{project.title}</Link>
                  </h3>
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

