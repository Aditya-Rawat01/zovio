"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Impact from "./sections/Impact";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

export default function Home() {
  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    // Scroll on initial load
    scrollToSection();

    // Listen for hash changes
    window.addEventListener("hashchange", scrollToSection);
    return () => window.removeEventListener("hashchange", scrollToSection);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Impact />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
