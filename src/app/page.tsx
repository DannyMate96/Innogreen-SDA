import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import ServicesCards from "@/components/ServicesCards";
import InnoGreenHomes from "@/components/InnoGreenHomes";
import SmartHomeTech from "@/components/SmartHomeTech";
import WhyChooseUs from "@/components/WhyChooseUs";
import LocationAreas from "@/components/LocationAreas";
import SeniorServices from "@/components/SeniorServices";
import Testimonials from "@/components/Testimonials";
import Credentials from "@/components/Credentials";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <ServicesCards />
      <InnoGreenHomes />
      <SmartHomeTech />
      <WhyChooseUs />
      <LocationAreas />
      <SeniorServices />
      <Testimonials />
      <Credentials />
      <CallToAction />
    </>
  );
}
