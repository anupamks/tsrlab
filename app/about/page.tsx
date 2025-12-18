import HeroBanner from '@/components/HeroBanner';
import Counter from '@/components/Counter';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Consolution',
  description: 'Learn more about Consolution - the best consulting agency helping businesses grow.',
};

export default function AboutPage() {
  return (
    <>
      <HeroBanner
        title="About Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About us' },
        ]}
      />

      {/* About Content */}
      <section className="ftco-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-5 order-md-last wrap-about align-items-stretch">
              <div className="wrap-about-border">
                <div
                  className="img"
                  style={{ backgroundImage: "url('/images/about.jpg')" }}
                ></div>
                <div className="text">
                  <h3>Read Our Success Story for Inspiration</h3>
                  <p>
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts. Separated they
                    live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.
                  </p>
                  <p>
                    <Link href="/contact" className="btn btn-primary py-3 px-4">
                      Contact us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-7 wrap-about pr-md-4 ftco-animate">
              <h2 className="mb-4">Welcome to Consolution</h2>
              <p>
                On her way she met a copy. The copy warned the Little Blind Text, that
                where it came from it would have been rewritten a thousand times and
                everything that was left from its origin would be the word.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it with the
                necessary regelialia. It is a paradisematic country, in which roasted
                parts of sentences fly into your mouth.
              </p>
              <p>
                On her way she met a copy. The copy warned the Little Blind Text, that
                where it came from it would have been rewritten a thousand times and
                everything that was left from its origin would be the word &quot;and&quot; and the
                Little Blind Text should turn around and return to its own, safe country.
                But nothing the copy said could convince her and so it didn&apos;t take long
                until a few insidious Copy Writers ambushed her, made her drunk with
                Longe and Parole and dragged her into their agency, where they abused her
                for their
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="ftco-section ftco-counter">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2 d-flex">
            <div className="col-md-6 align-items-stretch d-flex">
              <div
                className="img img-video d-flex align-items-center"
                style={{ backgroundImage: "url('/images/about.jpg')" }}
              >
                <div className="video justify-content-center">
                  <a
                    href="https://vimeo.com/45830194"
                    className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="ion-ios-play"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 heading-section ftco-animate pl-lg-5 pt-md-0 pt-5">
              <h2 className="mb-4">We Are the Best Consulting Agency</h2>
              <p>
                Separated they live in. A small river named Duden flows by their place
                and supplies it with the necessary regelialia. It is a paradisematic
                country. A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in which
                roasted parts of sentences fly into your mouth.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it with the
                necessary regelialia. It is a paradisematic country, in which roasted
                parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section
        className="ftco-intro ftco-no-pb img"
        style={{ backgroundImage: "url('/images/bg_3.jpg')" }}
      >
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 text-center heading-section heading-section-white ftco-animate">
              <h2 className="mb-0">You Always Get the Best Guidance</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Counter */}
      <Counter />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}

