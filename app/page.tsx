import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Impact from "./sections/Impact";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

export default function Home() {
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
