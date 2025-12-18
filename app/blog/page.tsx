import HeroBanner from '@/components/HeroBanner';
import BlogList from '@/components/BlogList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Consolution',
  description: 'Read our latest articles on business consulting, finance, and strategy.',
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

      <BlogList showHeading={false} />
    </>
  );
}
