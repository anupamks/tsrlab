import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects - Consolution',
  description: 'Explore our portfolio of successful projects in branding, design, and web development.',
};

const projects = [
  { id: 1, image: '/images/project-1.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 2, image: '/images/project-2.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 3, image: '/images/project-3.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 4, image: '/images/project-4.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 5, image: '/images/project-5.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 6, image: '/images/project-6.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 7, image: '/images/project-7.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 8, image: '/images/project-8.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
  { id: 9, image: '/images/project-9.jpg', title: 'Branding & Illustration Design', category: 'Web Design' },
];

export default function ProjectsPage() {
  return (
    <>
      <HeroBanner
        title="Project"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Project' },
        ]}
      />

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            {projects.map((project) => (
              <div key={project.id} className="col-md-4">
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
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

