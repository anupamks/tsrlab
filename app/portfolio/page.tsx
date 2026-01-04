import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/portfolio/PageHero';
import PortfolioSection from '../components/portfolio/PortfolioSection';
import ResearchCTA from '../components/research/ResearchCTA';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero />
      <PortfolioSection />
      <ResearchCTA />
      <Footer />
    </main>
  );
}