'use client';

import Link from 'next/link';
import Image from 'next/image';

const blogs = [
  {
    id: 1,
    image: '/images/image_1.jpg',
    day: '26',
    month: 'June',
    year: '2019',
    title: 'Finance And Legal Working Streams Occur Throughout',
    excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: 'Admin',
    comments: 3,
  },
  {
    id: 2,
    image: '/images/image_2.jpg',
    day: '26',
    month: 'June',
    year: '2019',
    title: 'Finance And Legal Working Streams Occur Throughout',
    excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: 'Admin',
    comments: 3,
  },
  {
    id: 3,
    image: '/images/image_3.jpg',
    day: '26',
    month: 'June',
    year: '2019',
    title: 'Finance And Legal Working Streams Occur Throughout',
    excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: 'Admin',
    comments: 3,
  },
  {
    id: 4,
    image: '/images/image_4.jpg',
    day: '26',
    month: 'June',
    year: '2019',
    title: 'Finance And Legal Working Streams Occur Throughout',
    excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: 'Admin',
    comments: 3,
  },
  {
    id: 5,
    image: '/images/image_5.jpg',
    day: '26',
    month: 'June',
    year: '2019',
    title: 'Finance And Legal Working Streams Occur Throughout',
    excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: 'Admin',
    comments: 3,
  },
  {
    id: 6,
    image: '/images/image_6.jpg',
    day: '26',
    month: 'June',
    year: '2019',
    title: 'Finance And Legal Working Streams Occur Throughout',
    excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: 'Admin',
    comments: 3,
  },
];

interface BlogListProps {
  showHeading?: boolean;
  limit?: number;
  bgLight?: boolean;
}

export default function BlogList({ showHeading = true, limit, bgLight = false }: BlogListProps) {
  const displayedBlogs = limit ? blogs.slice(0, limit) : blogs;

  return (
    <section className={`py-16 md:py-24 ${bgLight ? 'bg-gray-50' : ''}`}>
      <div className="container mx-auto px-4">
        {showHeading && (
          <div className="max-w-2xl mx-auto text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-primary">Recent</span> Blog
            </h2>
            <p className="text-gray-600">
              Separated they live in. A small river named Duden flows by their place and
              supplies it with the necessary regelialia. It is a paradisematic country
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBlogs.map((blog, index) => (
            <div 
              key={blog.id} 
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image with Date */}
              <Link href={`/blog/${blog.id}`} className="block relative overflow-hidden rounded-t-xl h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 bg-primary text-white text-center p-3 rounded-tr-xl z-10">
                  <span className="block text-2xl font-bold">{blog.day}</span>
                  <span className="text-xs uppercase">{blog.month}</span>
                  <span className="block text-xs">{blog.year}</span>
                </div>
              </Link>
              
              {/* Content */}
              <div className="bg-white p-6 rounded-b-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <Link 
                    href={`/blog/${blog.id}`}
                    className="text-primary font-semibold text-sm hover:underline flex items-center gap-1"
                  >
                    Read More
                    <span className="ion-ios-arrow-round-forward text-lg"></span>
                  </Link>
                  <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <span>{blog.author}</span>
                    <span className="flex items-center gap-1">
                      <span className="icon-chat"></span>
                      {blog.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
