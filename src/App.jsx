import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import Coverage from "./components/Coverage";
import WhyChooseUs from "./components/WhyChooseUs";
import TrackingDemo from "./components/TrackingDemo";
import QuoteEstimator from "./components/QuoteEstimator";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Fleet />
        <Coverage />
        <WhyChooseUs />
        <TrackingDemo />
        <QuoteEstimator />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </LanguageProvider>
  );
}
