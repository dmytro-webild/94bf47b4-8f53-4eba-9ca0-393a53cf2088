"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Smile, Star, Mail, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function EyudentDentalWebsite() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-[9999]">
        <Loader2 className="w-12 h-12 text-accent animate-spin" />
      </div>
    );
  }

  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="mediumLargeSizeMediumTitles"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Eyudent Dental"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
            { name: "አማርኛ", id: "language" }
          ]}
          button={{
            text: "Free Consultation",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Smile With Confidence"
          description="Premium dental care, cosmetic treatments, implants, and expert smile transformations in the heart of Addis Ababa."
          tag="Eyudent Special Dental Clinic"
          tagIcon={Sparkles}
          background={{ variant: "glowing-orb" }}
          imageSrc="http://img.b2bpic.net/free-photo/empty-orthodontist-stomatology-hospital-office-room-prepared-medical-healthcare-treatment-after-dental-diagnosis-orthodontic-cabinet-equipped-with-tooth-instruments-oral-care_482257-9417.jpg"
          imageAlt="Modern clinic setting in Addis Ababa"
          imagePosition="right"
          kpis={[
            { value: "5.0", label: "Google Rating" },
            { value: "1000+", label: "Happy Smiles" },
            { value: "Free", label: "Consultation" }
          ]}
          enableKpiAnimation={true}
          buttons={[
            { text: "View Our Services", href: "#services" },
            { text: "Get Free Estimate", href: "#contact" }
          ]}
          mediaAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <ProductCardTwo
          title="Specialized Dental Services"
          description="Advanced treatments with comfort-focused care and the latest technology."
          tag="Our Services"
          tagIcon={Smile}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          useInvertedBackground={true}
          products={[
            { id: "1", brand: "Restorative", name: "Dental Implants", price: "Starting from 15,000 ETB", rating: 5, reviewCount: "150", imageSrc: "http://img.b2bpic.net/free-photo/silver-aesthetic-wallpaper-with-hair-accessories_23-2149871682.jpg" },
            { id: "2", brand: "Cosmetic", name: "Teeth Whitening", price: "Starting from 5,000 ETB", rating: 5, reviewCount: "200", imageSrc: "http://img.b2bpic.net/free-photo/closeup-young-woman-having-her-teeth-whitened-with-ultraviolet-light-dental-clinic_662251-2598.jpg" },
            { id: "3", brand: "Orthodontic", name: "Braces & Alignment", price: "Free initial assessment", rating: 5, reviewCount: "180", imageSrc: "http://img.b2bpic.net/free-photo/dentist-examining-man-teeth-with-dental-explorer-dental-mirror_651396-2613.jpg" },
            { id: "4", brand: "General", name: "Cosmetic Dentistry", price: "Free initial assessment", rating: 5, reviewCount: "210", imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-sits-chair-dentist-office-while-doctor-shows-her-something_8353-1652.jpg" }
          ]}
          buttons={[
            { text: "Schedule Appointment", href: "#contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Your Smile Journey in Addis Ababa" }
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "Visit Our Clinic", href: "#contact" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Why Choose Eyudent"
          description="Committed to excellence with professional, clean facilities and an ideal location in Addis Ababa."
          tag="Patient Centered"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          useInvertedBackground={true}
          features={[
            { title: "Professional Care", description: "Dedicated to your comfort and health.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-dentist-their-clinic_23-2149206218.jpg" },
            { title: "Modern Clinic", description: "Neat, modern, and accessible location.", imageSrc: "http://img.b2bpic.net/free-photo/full-equiped-medical-cabinet_1303-23917.jpg" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Patient Success Stories"
          description="Real feedback from our satisfied patients in Ethiopia."
          tag="Reviews"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            { id: "1", name: "Patient", handle: "Satisfied Client", testimonial: "Professional service, neat clinic and ideal location.", imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-doctor-patient_23-2149941524.jpg" },
            { id: "2", name: "Patient", handle: "Verified Patient", testimonial: "Very nice and professional clinic.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-dentist-instruments_23-2151042887.jpg" },
            { id: "3", name: "Patient", handle: "Happy Client", testimonial: "Great services and reasonable prices.", imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-blond-female-dressed-white-shirt-red-eyeglasses_613910-14657.jpg" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Book Your Visit"
          tagIcon={Mail}
          title="Request Your Free Estimate Today"
          description="Visit us at Rohobot Building, 2nd Floor, Lebu Street, Addis Ababa or call 091 138 0220."
          background={{ variant: "plain" }}
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/no-people-empty-waiting-area-clinical-center-with-reception-desk-waiting-room-with-seats-start-checkup-visit-appointment-medical-examination-with-doctor-hospital-lobby_482257-46239.jpg"
          mediaPosition="right"
          mediaAnimation="slide-up"
          inputPlaceholder="Enter your full name"
          buttonText="Get Free Estimate"
          termsText="We prioritize your privacy and will respond within 24 hours."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Eyudent Special Dental Clinic"
          copyrightText="© 2025 Eyudent Special Dental Clinic • Premium Dental Experience"
          columns={[
            { title: "Our Services", items: [{ label: "Implants", href: "#services" }, { label: "Whitening", href: "#services" }] },
            { title: "Contact", items: [{ label: "Phone", href: "tel:0911380220" }, { label: "Location", href: "#contact" }] }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}