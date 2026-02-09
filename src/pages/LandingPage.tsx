import LandingLayout from "@/components/layout/LandingLayout";
import LPHeroSection from "@/components/landing/LPHeroSection";
import ProcessSection from "@/components/home/ProcessSection";
import VideoTestimonialsSection from "@/components/home/VideoTestimonialsSection";
import ScreenshotTestimonialsSection from "@/components/home/ScreenshotTestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import { useUTM } from "@/hooks/useUTM";

const LandingPage = () => {
  useUTM();

  return (
    <LandingLayout>
      <LPHeroSection />
      <ProcessSection />
      <VideoTestimonialsSection />
      <ScreenshotTestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </LandingLayout>
  );
};

export default LandingPage;
