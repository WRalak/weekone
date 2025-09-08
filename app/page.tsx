import  "./components/Navbar";
import Services from "./components/Services";
import About from "./components/clients";
import Coaches from "./components/Coaches";
import InputForm from "./components/CtaSection";
import Footer from "./components/Footer";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";


export default function Home() {
  return (
    <>
      <Navbar />
      
        <Hero />
        <Services />
        <About />
        <Coaches />
        <InputForm />
      
      <Footer />
    </>
  );
}
