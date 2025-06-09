import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import ProcessTimeline from "./components/ProcessTimeline";
import WorkShowcase from "./components/WorkShowcase";
import AboutCompany from "./components/AboutCompany";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <ProcessTimeline />
      <WorkShowcase />
      <AboutCompany />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <ContactSection />
      <Footer />
    </div>
  );
}