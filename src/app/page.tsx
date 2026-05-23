'use client';
import React from 'react';
import Header from '../components/ui/Header';
import HeroSection from '../components/ui/Hero';
import AboutText from '../components/ui/AboutText';
import { FeatherIcon } from 'lucide-react';
import ServicesPage from '../components/ui/ServicesPage';
import GallerySlider from '../components/ui/GallerySlider';
import FollowFeed from '../components/ui/FollowFeed';
import Footer from '../components/ui/Footer';
import FeaturedCollections from '../components/ui/FeaturedCollections';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen font-inter overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutText />
      <FeaturedCollections />
      <ServicesPage />
      <GallerySlider />
      <FollowFeed />
      <Footer />
    </div>
  );
};
export default LandingPage;
