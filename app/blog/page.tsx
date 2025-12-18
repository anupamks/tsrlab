import HeroBanner from '@/components/HeroBanner';
import BlogList from '@/components/BlogList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Consolution',
  description: 'Read our latest articles on business, finance, consulting, and industry insights.',
};

export default function BlogPage() {
  return (
    <>
      <HeroBanner
        title="Blog"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]}
      />

      <BlogList showHeading={false} bgLight={true} />

      <div className="container">
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
    </>
  );
}

