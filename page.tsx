import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#0b0d10" }}>
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}
