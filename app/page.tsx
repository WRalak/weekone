import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Coaches from "./components/Coaches";
import InputForm from "./components/CtaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16"> {/* padding to offset fixed navbar */}
        <Hero />
        <Services />
        <About />
        <Coaches />
        <InputForm />
      </main>
      <Footer />
    </>
  );
}
