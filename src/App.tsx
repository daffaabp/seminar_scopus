import React, { useEffect, useState } from "react";
import { HeroSection } from "./components/hero-section";
import { ProblemSection } from "./components/problem-section";
import { SolutionSection } from "./components/solution-section";
import { BenefitsSection } from "./components/benefits-section";
import { StatementCTASection } from "./components/statement-cta-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { FeaturesSection } from "./components/features-section";
import { SpecialOfferSection } from "./components/special-offer-section";
import { RegistrationSection } from "./components/registration-section";
import { Footer } from "./components/footer";
import { PaymentPending } from "./components/payment-pending";
import { TermsOfService } from "./components/terms-of-service";
import { PrivacyPolicy } from "./components/privacy-policy";

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

  // Route to terms of service page
  if (currentPath === "/terms-of-service" || window.location.pathname === "/terms-of-service") {
    return <TermsOfService />;
  }

  // Route to privacy policy page
  if (currentPath === "/privacy-policy" || window.location.pathname === "/privacy-policy") {
    return <PrivacyPolicy />;
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
      <RegistrationSection />
      <Footer />
    </div>
  );
}
