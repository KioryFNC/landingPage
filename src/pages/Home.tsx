import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialSection } from "@/components/TestimonialsSection";
import React from "react";

export const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
};
