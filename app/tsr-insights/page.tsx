import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InsightsHero from '../components/insights/InsightsHero';
import FeaturedInsight from '../components/insights/FeaturedInsight';
import WhyInsightsMatter from '../components/insights/WhyInsightsMatter';
import InsightsContent from '../components/insights/InsightsContent';

export default function TSRInsightsPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen">
        <Header />
        <InsightsHero />
        <div className="container-custom py-24 space-y-24">
          <FeaturedInsight />
          <WhyInsightsMatter />
          <InsightsContent />
        </div>
        <Footer />
      </main>
    </PageWrapper>
  );
}