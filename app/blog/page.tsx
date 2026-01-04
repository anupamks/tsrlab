import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogHero from '../components/blog/BlogHero';
import BlogList from '../components/blog/BlogList';

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BlogHero />
      <BlogList />
      <Footer />
    </main>
  );
}