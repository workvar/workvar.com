import { Play } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import timeAwarenessImg from "@/assets/time-awareness.jpg";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handlePlay = () => {
    setIsPlaying(true);
    // In a real implementation, this would trigger the video to play
  };

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              See WorkVar in Action
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch how focus mode transforms your workspace
            </p>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-glow border border-primary/20 group"
          >
            {/* Video Thumbnail */}
            <div className="relative aspect-video bg-gradient-subtle">
              <img
                src={timeAwarenessImg}
                alt="WorkVar demo"
                className="w-full h-full object-cover"
              />
              
              {/* Video Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent flex items-center justify-center">
                  <Button
                    variant="hero"
                    size="xl"
                    onClick={handlePlay}
                    className="group/play"
                  >
                    <Play className="w-6 h-6 group-hover/play:scale-110 transition-transform" />
                    <span>Watch Demo</span>
                  </Button>
                </div>
              )}
              
              {/* Replace with actual video element when you have a video URL */}
              {isPlaying && (
                <video
                  autoPlay
                  controls
                  className="w-full h-full"
                  poster={timeAwarenessImg}
                >
                  <source src="/videos/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            
            {/* Video Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
              <p className="text-sm text-muted-foreground">
                Experience deep focus with intelligent distraction blocking
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};