import { Eye, Clock, Waves, Coffee } from "lucide-react";
import focusModeImg from "@/assets/focus-mode.jpg";
import timeAwarenessImg from "@/assets/time-awareness.jpg";
import soundscapesImg from "@/assets/soundscapes.jpg";
import breaksImg from "@/assets/breaks.jpg";

const features = [
  {
    icon: Eye,
    title: "Focus Mode",
    description: "Highlights exactly what you're working on, hides everything else. Pure signal, zero noise.",
    image: focusModeImg,
  },
  {
    icon: Clock,
    title: "Live Time Awareness",
    description: "Quiet invisible tracking that shows where your hours truly went. No judgment, just clarity.",
    image: timeAwarenessImg,
  },
  {
    icon: Waves,
    title: "Flow Soundscapes",
    description: "Adaptive audio designed to help you enter deep focus faster and stay there longer.",
    image: soundscapesImg,
  },
  {
    icon: Coffee,
    title: "Scheduled Breaks",
    description: "Intentional reset moments with guided micro-activities. Rest with purpose, return refreshed.",
    image: breaksImg,
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              What we're building
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              WorkVar creates a focused execution environment around you
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-subtle rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-medium"
                >
                  {/* Feature Image Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="relative z-10 p-8 space-y-4">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Feature Image Preview */}
                    <div className="mt-6 rounded-lg overflow-hidden border border-border/50 shadow-soft">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};