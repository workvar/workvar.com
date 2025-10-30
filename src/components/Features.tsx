import { Eye, Clock, Waves, Coffee } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Focus Mode",
    description: "Highlights exactly what you're working on, hides everything else. Pure signal, zero noise.",
  },
  {
    icon: Clock,
    title: "Live Time Awareness",
    description: "Quiet invisible tracking that shows where your hours truly went. No judgment, just clarity.",
  },
  {
    icon: Waves,
    title: "Flow Soundscapes",
    description: "Adaptive audio designed to help you enter deep focus faster and stay there longer.",
  },
  {
    icon: Coffee,
    title: "Scheduled Breaks",
    description: "Intentional reset moments with guided micro-activities. Rest with purpose, return refreshed.",
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
                  className="group bg-gradient-subtle rounded-2xl p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-medium"
                >
                  <div className="space-y-4">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
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