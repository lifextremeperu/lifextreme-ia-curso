/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BentoSolutions } from './components/BentoSolutions';
import { VipBonusSection } from './components/VipBonusSection';
import { VideoGallerySection } from './components/VideoGallerySection';
import { AiSimulatorSection } from './components/AiSimulatorSection';
import { CurriculumSection } from './components/CurriculumSection';
import { InstructorSection } from './components/InstructorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { StudentChatbot } from './components/StudentChatbot';
import { VideoModal } from './components/VideoModal';
import { LoginGate } from './components/LoginGate';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeVideoModalId, setActiveVideoModalId] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);

  if (!isVerified) {
    return <LoginGate onVerified={() => setIsVerified(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#0B192C] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Hero Section with Dynamic Typing & 3D Tech Canvas */}
      <HeroSection
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        onOpenVideoModal={(vid) => setActiveVideoModalId(vid)}
      />

      {/* The 7 Operational Solutions Bento Grid */}
      <BentoSolutions
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Disruptive VIP 1-Month Mentorship Scarcity Module */}
      <VipBonusSection
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Video Masterclass & YouTube Showcase */}
      <VideoGallerySection
        onOpenVideoModal={(vid) => setActiveVideoModalId(vid)}
      />

      {/* Interactive AI Prompt Playground / Simulator */}
      <AiSimulatorSection
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Detailed Curriculum Syllabus */}
      <CurriculumSection
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Instructor Profile & Credibility */}
      <InstructorSection
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Student & Travel Agency Testimonials */}
      <TestimonialsSection />

      {/* Pricing & Offer Breakdown */}
      <PricingSection
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Frequently Asked Questions */}
      <FaqSection
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Footer */}
      <Footer
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Frictionless 3-Step Checkout Modal (Lead Gen + Yape + WhatsApp) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* AI Student Assistant Chatbot (Aria) */}
      <StudentChatbot
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
        onOpenCheckout={() => {
          setIsChatOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Fullscreen Video Modal */}
      <VideoModal
        videoId={activeVideoModalId}
        onClose={() => setActiveVideoModalId(null)}
      />
    </div>
  );
}
