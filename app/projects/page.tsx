import HeroBanner from '@/components/HeroBanner';
import Projects from '@/components/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects - TSR Lab',
  description: 'View our portfolio of successful business consulting projects.',
};

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

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Projects showHeading={false} />
          
          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              &lt;
            </button>
            {[1, 2, 3, 4, 5].map((num) => (
              <button 
                key={num}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  num === 1 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 hover:bg-primary hover:text-white'
                }`}
              >
                {num}
              </button>
            ))}
            <button className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              &gt;
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
