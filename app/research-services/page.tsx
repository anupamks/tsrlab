import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResearchHero from '../components/research/ResearchHero';
import ResearchIntro from '../components/research/ResearchIntro';
import ResearchServicesSection from '../components/research/ResearchServicesSection';
import ResearchProcessSection from '../components/research/ResearchProcessSection';
import ResearchCTA from '../components/research/ResearchCTA';

export default function ResearchServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ResearchHero />
      <ResearchIntro />
      <ResearchServicesSection />
      <ResearchProcessSection />
      <ResearchCTA />
      <Footer />
    </main>
  );
}