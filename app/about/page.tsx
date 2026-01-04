import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/about/PageHero';
import WhoWeAreSection from '../components/about/WhoWeAreSection';
import SuccessStorySection from '../components/about/SuccessStorySection';
import WhyChooseUsSection from '../components/about/WhyChooseUsSection';

export default function AboutPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen">
        <Header />
        <PageHero />
        <WhoWeAreSection />
        <SuccessStorySection />
        <WhyChooseUsSection />
        <Footer />
      </main>
    </PageWrapper>
  );
}