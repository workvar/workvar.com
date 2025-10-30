import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-bg.jpg";
import heroPoster from "@/assets/hero-video-poster.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background with fallback */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero/80 z-10" />
        
        {/* Video element - replace src with your actual video URL */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroPoster}
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          {/* Fallback to static image */}
          <img 
            src={heroBackground} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse-slow z-10" />
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Credibility badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 text-sm text-muted-foreground"
          >
            <span className="px-4 py-1.5 rounded-full bg-background/50 backdrop-blur-sm border border-primary/20">
              Trusted by PMs at Meta & Stripe
            </span>
          </motion.div>
          
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
          >
            You start your day with{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-primary bg-clip-text text-transparent inline-block"
            >
              intention
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
          >
            But within minutes, your focus is stolen. WorkVar builds a protective 
            environment around your attention before distractions even begin.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A quiet system that clears the noise — so you stay locked in flow.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-base text-muted-foreground italic"
          >
            AI that removes busywork while you focus on decisions.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button variant="hero" size="xl" className="group">
              Get Early Access
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outlineWhite" size="xl">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};