import React, { useEffect, useState } from "react";
import { HeroSection } from "./components/hero-section";
import { BenefitsSection } from "./components/benefits-section";
import { SpeakersSection } from "./components/speakers-section";
import { SolutionSection } from "./components/solution-section";
import { SpecialOfferSection } from "./components/special-offer-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { RegistrationSection } from "./components/registration-section";
import { Footer } from "./components/footer";
import { PaymentPending } from "./components/payment-pending";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Listen for URL changes
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Route to payment pending page
  if (currentPath === "/payment-pending" || window.location.pathname === "/payment-pending") {
    return <PaymentPending />;
  }

  // Default landing page
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <SpeakersSection />
      <SolutionSection />
      <BenefitsSection />
      <SpecialOfferSection />
      <TestimonialsSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
}
