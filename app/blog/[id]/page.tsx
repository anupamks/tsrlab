'use client';

import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';
import { useState, FormEvent } from 'react';

const categories = [
  { name: 'Business', count: 6 },
  { name: 'Finance', count: 8 },
  { name: 'Auto loan', count: 2 },
  { name: 'Real Estate', count: 2 },
  { name: 'Businessman', count: 2 },
];

const popularArticles = [
  { id: 1, image: '/images/image_1.jpg', title: 'Even the all-powerful Pointing has no control about the blind texts', date: 'June 27, 2019', author: 'Dave Lewis', comments: 19 },
  { id: 2, image: '/images/image_2.jpg', title: 'Even the all-powerful Pointing has no control about the blind texts', date: 'June 27, 2019', author: 'Dave Lewis', comments: 19 },
  { id: 3, image: '/images/image_3.jpg', title: 'Even the all-powerful Pointing has no control about the blind texts', date: 'June 27, 2019', author: 'Dave Lewis', comments: 19 },
];

const tags = ['School', 'Kids', 'Nursery', 'Daycare', 'Care', 'Kindergarten', 'Teacher'];

export default function BlogSinglePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    console.log('Search:', searchQuery);
  };

  const handleCommentSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Comment:', commentForm);
    setCommentForm({ name: '', email: '', website: '', message: '' });
  };

  return (
    <>
      <HeroBanner
        title="Blog Single"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Blog Single' },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                #2. Creative WordPress Themes
              </h2>
              
              <p className="text-gray-600 mb-4">
                Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati
                rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex
                architecto voluptatum aut officia doloremque.
              </p>
              
              <img 
                src="/images/image_2.jpg" 
                alt="Blog post" 
                className="w-full rounded-xl mb-6"
              />
              
              <p className="text-gray-600 mb-4">
                Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
                reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur
                tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur
                suscipit veritatis nulla quos quia aspernatur perferendis.
              </p>
              
              <p className="text-gray-600 mb-4">
                Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit
                commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi
                in dolorum consequatur, veritatis porro explicabo soluta commodi.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8 pt-6 border-t">
                {['Life', 'Sport', 'Tech', 'Travel'].map((tag) => (
                  <a 
                    key={tag}
                    href="#" 
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-primary hover:text-white transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>

              {/* Author */}
              <div className="flex gap-6 p-6 bg-gray-50 rounded-xl mb-8">
                <img 
                  src="/images/person_1.jpg" 
                  alt="Author" 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">George Washington</h3>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                    itaque, autem necessitatibus voluptate quod mollitia delectus aut.
                  </p>
                </div>
              </div>

              {/* Comments */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">6 Comments</h3>
                
                {[1, 2].map((_, i) => (
                  <div key={i} className="flex gap-4 mb-6 pb-6 border-b">
                    <img 
                      src="/images/person_1.jpg" 
                      alt="Commenter" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">John Doe</h4>
                      <span className="text-sm text-gray-500">June 27, 2019 at 2:21pm</span>
                      <p className="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Pariatur quidem laborum necessitatibus, ipsam impedit vitae.
                      </p>
                      <button className="text-primary text-sm font-semibold mt-2 hover:underline">
                        Reply
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Leave a comment</h3>
                <form onSubmit={handleCommentSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                      <input
                        type="text"
                        value={commentForm.name}
                        onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        value={commentForm.email}
                        onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                    <input
                      type="url"
                      value={commentForm.website}
                      onChange={(e) => setCommentForm({ ...commentForm, website: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      rows={5}
                      value={commentForm.message}
                      onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1" data-aos="fade-left">
              {/* Search */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <span className="icon-search"></span>
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Category</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="flex justify-between py-2 text-gray-600 hover:text-primary transition-colors"
                      >
                        {category.name}
                        <span className="text-gray-400">({category.count})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Articles */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Articles</h3>
                <div className="space-y-4">
                  {popularArticles.map((article) => (
                    <div key={article.id} className="flex gap-4">
                      <div
                        className="w-20 h-16 rounded-lg bg-cover bg-center flex-shrink-0"
                        style={{ backgroundImage: `url(${article.image})` }}
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 hover:text-primary transition-colors line-clamp-2">
                          <Link href={`/blog/${article.id}`}>{article.title}</Link>
                        </h4>
                        <div className="flex gap-2 text-xs text-gray-500 mt-1">
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tag Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
