import { Target, Rocket, Users } from "lucide-react";

const benefits = [
  "Reclaim deep uninterrupted focus",
  "Understand and optimize your time pattern",
  "Enter flow state with intention",
  "End your day with clarity — not fatigue",
];

export const Audience = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Who It's For */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Built for High-Performance Professionals</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Not another productivity app — a system.
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed for founders, PMs, engineers, operators.{" "}
              <span className="text-foreground font-semibold">Individual power today.</span>{" "}
              Team-ready tomorrow.
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-soft"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
                </div>
                <p className="text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>
          
          {/* Enterprise Promise */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-subtle border border-border p-8 md:p-12 shadow-medium">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
            <div className="relative z-10 space-y-4 text-center">
              <div className="inline-flex p-3 rounded-xl bg-primary/10">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Light Enterprise Promise
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built for individuals — architected for scale. WorkVar is crafted to 
                evolve seamlessly into team and organizational intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};