import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { VideoSection } from "@/components/VideoSection";
import { Audience } from "@/components/Audience";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Features />
      <VideoSection />
      <Audience />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;