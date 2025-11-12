import React, { useEffect, useState } from "react";
import { HeroSection } from "./components/hero-section";
import { ProblemSection } from "./components/problem-section";
import { SolutionSection } from "./components/solution-section";
import { BenefitsSection } from "./components/benefits-section";
import { StatementCTASection } from "./components/statement-cta-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { FeaturesSection } from "./components/features-section";
import { SpecialOfferSection } from "./components/special-offer-section";
import { FAQSection } from "./components/faq-section";
import { StatementPenutupCTASection } from "./components/statement-penutup-cta-section";
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
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <StatementCTASection />
      <TestimonialsSection />
      <FeaturesSection />
      <SpecialOfferSection />
      <FAQSection />
      <StatementPenutupCTASection />
      <RegistrationSection />
      <Footer />
    </div>
  );
}
