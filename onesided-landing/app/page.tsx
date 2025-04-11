"use client";

import { useEffect } from "react";
import NavbarDemo from "@/components/ui/resizable-navbar-demo";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import RobloxSection from "@/components/RobloxSection";
import RobloxStudioSection from "@/components/RobloxStudioSection";
import VerticalTimeline from "@/components/VerticalTimeline";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import { initScrollReveal } from "@/utils/gridMagnify";

export default function Home() {
  useEffect(() => {
    // Initialize scroll reveal animations
    initScrollReveal();

    // Re-initialize on window resize
    const handleResize = () => {
      initScrollReveal();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background-dark)] dark">
      <NavbarDemo />
      <Hero />
      <Projects />
      <RobloxSection />
      <RobloxStudioSection />
      <VerticalTimeline />
      <Quote />
      <Footer />
    </div>
  );
}
