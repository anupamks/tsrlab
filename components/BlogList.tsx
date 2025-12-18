'use client';

import Link from 'next/link';

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
    <section className={`ftco-section ${bgLight ? 'bg-light' : ''}`}>
      <div className="container">
        {showHeading && (
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <h2 className="mb-4">
                <span>Recent</span> Blog
              </h2>
              <p>
                Separated they live in. A small river named Duden flows by their place and
                supplies it with the necessary regelialia. It is a paradisematic country
              </p>
            </div>
          </div>
        )}
        <div className="row">
          {displayedBlogs.map((blog) => (
            <div key={blog.id} className="col-md-6 col-lg-4 ftco-animate">
              <div className="blog-entry">
                <Link
                  href={`/blog/${blog.id}`}
                  className="block-20 d-flex align-items-end"
                  style={{ backgroundImage: `url('${blog.image}')` }}
                >
                  <div className="meta-date text-center p-2">
                    <span className="day">{blog.day}</span>
                    <span className="mos">{blog.month}</span>
                    <span className="yr">{blog.year}</span>
                  </div>
                </Link>
                <div className="text bg-white p-4">
                  <h3 className="heading">
                    <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h3>
                  <p>{blog.excerpt}</p>
                  <div className="d-flex align-items-center mt-4">
                    <p className="mb-0">
                      <Link href={`/blog/${blog.id}`} className="btn btn-primary">
                        Read More <span className="ion-ios-arrow-round-forward"></span>
                      </Link>
                    </p>
                    <p className="ml-auto mb-0">
                      <span className="mr-2">{blog.author}</span>
                      <span className="meta-chat">
                        <span className="icon-chat"></span> {blog.comments}
                      </span>
                    </p>
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

