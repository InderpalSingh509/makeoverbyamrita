import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Transformation from "@/components/sections/Transformation/Transformation";
import Services from "@/components/sections/Services/Services";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import FAQ from "@/components/sections/FAQ/FAQ";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import ScrollToTop from "@/components/ui/ScrollToTop";
import StickyBookBar from "@/components/ui/StickyBookBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Transformation />
        <Services />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <ScrollToTop />
      <FloatingWhatsApp />
      <StickyBookBar />
      <Footer />
    </>
  );
}
