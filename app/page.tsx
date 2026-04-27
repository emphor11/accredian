import { AccredianEdge } from "./components/AccredianEdge";
import { CatFramework } from "./components/CatFramework";
import { Clients } from "./components/Clients";
import { CtaBanner } from "./components/CtaBanner";
import { DomainExpertise } from "./components/DomainExpertise";
import { EnquiryModal } from "./components/EnquiryModal";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { LeadFormSection } from "./components/LeadFormSection";
import { Navbar } from "./components/Navbar";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Clients />
        <AccredianEdge />
        <DomainExpertise />
        <CatFramework />
        <HowItWorks />
        <FAQ />
        <LeadFormSection />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
      <EnquiryModal />
    </>
  );
}
