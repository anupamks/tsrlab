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

const archives = [
  { date: 'December 2018', count: 30 },
  { date: 'November 2018', count: 20 },
  { date: 'September 2018', count: 6 },
  { date: 'August 2018', count: 8 },
];

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

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ftco-animate">
              <h2 className="mb-3">#2. Creative WordPress Themes</h2>
              <p>
                Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati
                rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex
                architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis
                molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi
                repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut,
                adipisci.
              </p>
              <p>
                <img src="/images/image_2.jpg" alt="" className="img-fluid" />
              </p>
              <p>
                Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
                reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur
                tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur
                suscipit veritatis nulla quos quia aspernatur perferendis, libero sint.
                Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem
                maiores.
              </p>
              <p>
                Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit
                commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi
                in dolorum consequatur, veritatis porro explicabo soluta commodi libero
                voluptatem similique id quidem? Blanditiis voluptates aperiam non magni.
                Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.
              </p>
              <p>
                Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem,
                dolor distinctio similique asperiores voluptas enim, exercitationem
                ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure
                nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero
                dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab
                voluptatibus culpa, tenetur recusandae!
              </p>
              <p>
                Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at
                officia adipisci quasi nemo a perspiciatis provident magni laboriosam
                repudiandae iure iusto commodi debitis est blanditiis alias laborum sint
                dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate
                soluta doloremque aut ratione. Harum voluptates mollitia illo minus
                praesentium, rerum ipsa debitis, inventore?
              </p>

              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">Life</a>
                  <a href="#" className="tag-cloud-link">Sport</a>
                  <a href="#" className="tag-cloud-link">Tech</a>
                  <a href="#" className="tag-cloud-link">Travel</a>
                </div>
              </div>

              <div className="about-author d-flex p-4 bg-light">
                <div className="bio mr-5">
                  <img src="/images/person_1.jpg" alt="Image placeholder" className="img-fluid mb-4" />
                </div>
                <div className="desc">
                  <h3>George Washington</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                    itaque, autem necessitatibus voluptate quod mollitia delectus aut,
                    sunt placeat nam vero culpa sapiente consectetur similique, inventore
                    eos fugit cupiditate numquam!
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5">
                <h3 className="mb-5 h4 font-weight-bold">6 Comments</h3>
                <ul className="comment-list">
                  <li className="comment">
                    <div className="vcard bio">
                      <img src="/images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>John Doe</h3>
                      <div className="meta mb-2">June 27, 2019 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                        autem, eum officia, fugiat saepe enim sapiente iste iure! Quam
                        voluptas earum impedit necessitatibus, nihil?
                      </p>
                      <p>
                        <a href="#" className="reply">Reply</a>
                      </p>
                    </div>
                  </li>
                  <li className="comment">
                    <div className="vcard bio">
                      <img src="/images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>John Doe</h3>
                      <div className="meta mb-2">June 27, 2019 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                        autem, eum officia, fugiat saepe enim sapiente iste iure! Quam
                        voluptas earum impedit necessitatibus, nihil?
                      </p>
                      <p>
                        <a href="#" className="reply">Reply</a>
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5 h4 font-weight-bold">Leave a comment</h3>
                  <form onSubmit={handleCommentSubmit} className="p-5 bg-light">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={commentForm.name}
                        onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={commentForm.email}
                        onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input
                        type="url"
                        className="form-control"
                        id="website"
                        value={commentForm.website}
                        onChange={(e) => setCommentForm({ ...commentForm, website: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        cols={30}
                        rows={10}
                        className="form-control"
                        value={commentForm.message}
                        onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4 sidebar ftco-animate">
              <div className="sidebar-box">
                <form onSubmit={handleSearch} className="search-form">
                  <div className="form-group">
                    <span className="icon icon-search"></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type a keyword and hit enter"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </form>
              </div>

              <div className="sidebar-box ftco-animate">
                <h3>Category</h3>
                <ul className="categories">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#">{category.name} <span>({category.count})</span></a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-box ftco-animate">
                <h3>Popular Articles</h3>
                {popularArticles.map((article) => (
                  <div key={article.id} className="block-21 mb-4 d-flex">
                    <div
                      className="blog-img mr-4"
                      style={{ backgroundImage: `url(${article.image})` }}
                    ></div>
                    <div className="text">
                      <h3 className="heading">
                        <Link href={`/blog/${article.id}`}>{article.title}</Link>
                      </h3>
                      <div className="meta">
                        <div><span className="icon-calendar"></span> {article.date}</div>
                        <div><span className="icon-person"></span> {article.author}</div>
                        <div><span className="icon-chat"></span> {article.comments}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sidebar-box ftco-animate">
                <h3>Tag Cloud</h3>
                <ul className="tagcloud m-0 p-0">
                  {tags.map((tag, index) => (
                    <a key={index} href="#" className="tag-cloud-link">{tag}</a>
                  ))}
                </ul>
              </div>

              <div className="sidebar-box ftco-animate">
                <h3>Archives</h3>
                <ul className="categories">
                  {archives.map((archive, index) => (
                    <li key={index}>
                      <a href="#">{archive.date} <span>({archive.count})</span></a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-box ftco-animate">
                <h3>Paragraph</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                  itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt
                  placeat nam vero culpa sapiente consectetur similique, inventore eos
                  fugit cupiditate numquam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

