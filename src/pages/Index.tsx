import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhatThisIsSection from "@/components/home/WhatThisIsSection";
import WhoItsForSection from "@/components/home/WhoItsForSection";
import TheModelSection from "@/components/home/TheModelSection";
import ProcessSection from "@/components/home/ProcessSection";
import OffersSection from "@/components/home/OffersSection";
import VideoTestimonialsSection from "@/components/home/VideoTestimonialsSection";
import ScreenshotTestimonialsSection from "@/components/home/ScreenshotTestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import { useUTM } from "@/hooks/useUTM";

const Index = () => {
  useUTM();

  return (
    <Layout>
      <HeroSection />
      <WhatThisIsSection />
      <WhoItsForSection />
      <TheModelSection />
      <ProcessSection />
      <OffersSection />
      <VideoTestimonialsSection />
      <ScreenshotTestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </Layout>
  );
};

export default Index;
