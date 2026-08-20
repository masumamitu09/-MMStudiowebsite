import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { AuthModal } from './components/AuthModal';
import { OrderModal } from './components/OrderModal';
import { AdminPanel } from './components/AdminPanel';
import { ClientDashboardModal } from './components/ClientDashboardModal';
import { InvoiceViewModal } from './components/InvoiceViewModal';
import { CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

function MainAppContent() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Logo & Brand Identity');
  const { toastMessage, openOrderModal } = useApp();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectServiceFromCard = (serviceName: string) => {
    let mappedType = 'Logo & Brand Identity';
    if (serviceName.includes('Social')) mappedType = 'Social Media Graphics';
    else if (serviceName.includes('Print') || serviceName.includes('Marketing')) mappedType = 'Print & Marketing Design';
    else if (serviceName.includes('Thumbnail')) mappedType = 'YouTube Thumbnails';
    else if (serviceName.includes('Business Card') || serviceName.includes('Stationery')) mappedType = 'Business Cards & Stationery';
    else if (serviceName.includes('Custom')) mappedType = 'Custom Graphic Design';

    setSelectedProjectType(mappedType);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white relative font-['Plus_Jakarta_Sans'] antialiased">
      {/* Subtle, Elegant Ambient Background */}
      <AnimatedBackground />

      {/* Sticky Navigation with Unified Sign-in / Admin detection */}
      <Navbar onNavigate={scrollToSection} />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-800 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs font-['Space_Grotesk'] font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        {/* 1. Hero Section */}
        <Hero onNavigate={scrollToSection} />

        {/* 2. About Section */}
        <About onNavigate={scrollToSection} />

        {/* 3. Skills Section */}
        <Skills onNavigate={scrollToSection} />

        {/* 4. Portfolio Section (Selected Work with Direct Order trigger) */}
        <Portfolio onSelectService={handleSelectServiceFromCard} />

        {/* 5. Services Section (What I Can Design For You with 30% Advance Calculation) */}
        <Services onSelectService={handleSelectServiceFromCard} />

        {/* 6. Process Section (01-05 Design Process) */}
        <Process onNavigate={scrollToSection} />

        {/* 7. Why Work With Me Section */}
        <WhyWorkWithMe onNavigate={scrollToSection} />

        {/* 8. Verified Metrics */}
        <Stats />

        {/* 9. Testimonials (Sample Client Endorsements) */}
        <Testimonials onNavigate={scrollToSection} />

        {/* 10. Call To Action Banner */}
        <CtaBanner onNavigate={scrollToSection} />

        {/* 11. Contact Inquiry Section */}
        <Contact initialProjectType={selectedProjectType} />
      </main>

      {/* Footer with portal links */}
      <Footer onNavigate={scrollToSection} />

      {/* Global Application Modals */}
      <AuthModal />
      <OrderModal />
      <AdminPanel />
      <ClientDashboardModal />
      <InvoiceViewModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
