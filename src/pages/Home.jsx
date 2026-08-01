import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Certificates from "../components/Certificates/Certificates";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Experience from "../components/Experience/Experience";

function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;