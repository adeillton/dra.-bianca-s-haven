import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingIntro from "@/components/LoadingIntro";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleFinished = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <LoadingIntro onFinished={handleFinished} />}
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
