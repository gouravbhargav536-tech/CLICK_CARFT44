/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { LanguageCode } from './types';
import { getTranslation } from './data/translations';
import { isRtlLanguage } from './data/languages';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientMarquee } from './components/ClientMarquee';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutMission } from './components/AboutMission';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FounderSection } from './components/FounderSection';
import { LeadForm } from './components/LeadForm';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { NetlifyDeployGuideModal } from './components/NetlifyDeployGuideModal';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { LoaderScreen } from './components/LoaderScreen';

export default function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem('clickcraft_lang') as LanguageCode;
      if (saved) return saved;
    } catch {
      // Fallback
    }
    return 'en';
  });

  const [preselectedService, setPreselectedService] = useState<string>('Boost Your Contact');
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize Lenis Smooth Inertial Scrolling
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let lenis: Lenis | null = null;
    let rafId: number;

    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    } catch {
      // Graceful fallback to native scroll
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  // Sync RTL and lang attributes on the html tag whenever language changes
  useEffect(() => {
    try {
      localStorage.setItem('clickcraft_lang', currentLang);
    } catch {
      // localStorage exception fallback
    }

    const isRtl = isRtlLanguage(currentLang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLang);
  }, [currentLang]);

  const t = getTranslation(currentLang);

  const handleSelectServiceForForm = (serviceKey: string) => {
    setPreselectedService(serviceKey);
    const formElement = document.getElementById('contact');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-orange-500 selection:text-white relative overflow-x-hidden">
      {/* 1. Preloader Screen on White */}
      {!isLoaded && <LoaderScreen onLoaded={() => setIsLoaded(true)} />}

      {/* 2. Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 3. Custom Magnetic Cursor */}
      <CustomCursor />

      {/* 4. Navigation Top Bar */}
      <Navbar
        t={t}
        currentLang={currentLang}
        onSelectLanguage={setCurrentLang}
        onOpenDeployGuide={() => setIsDeployModalOpen(true)}
      />

      {/* Main Content Sections (100% Pure White Background) */}
      <main className="flex-1 bg-white">
        {/* 1. Hero Section matching reference image */}
        <Hero t={t} />

        {/* 2. Scaled Brands & Verified Track Marquee */}
        <ClientMarquee />

        {/* 3. Core Agency Services with 3D Tilt Cards */}
        <ServicesSection
          t={t}
          onSelectServiceForForm={handleSelectServiceForForm}
        />

        {/* 4. Why Choose Us with Interactive Before/After Comparison Slider */}
        <WhyChooseUs t={t} />

        {/* 5. About & Mission Section (Jhunjhunu Roots & Founder Vision) */}
        <AboutMission t={t} />

        {/* 6. Client Reviews with 3D Depth Testimonials Carousel */}
        <TestimonialsSection t={t} />

        {/* 7. Founder Section (Amerjeet Kumar Spotlight & Direct Connect) */}
        <FounderSection t={t} />

        {/* 8. Lead Capture Form with Confetti & Direct WhatsApp Launch */}
        <LeadForm
          t={t}
          preselectedService={preselectedService}
        />
      </main>

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions t={t} />

      {/* Footer */}
      <Footer
        t={t}
        onOpenDeployGuide={() => setIsDeployModalOpen(true)}
      />

      {/* Netlify Deploy Guide Modal */}
      <NetlifyDeployGuideModal
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
      />
    </div>
  );
}
