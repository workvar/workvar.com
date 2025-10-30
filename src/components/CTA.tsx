import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles, Gift } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "You're on the list!",
      description: "We'll reach out personally when private beta opens.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gradient-hero to-background opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-primary opacity-5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Main CTA Card */}
          <div className="bg-gradient-subtle rounded-3xl p-8 md:p-12 shadow-glow border border-primary/20">
            <div className="space-y-8 text-center">
              {/* Icon */}
              <div className="inline-flex p-4 rounded-2xl bg-gradient-primary shadow-glow">
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              </div>
              
              {/* Heading */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Join the Private Beta
                </h2>
                <p className="text-lg text-muted-foreground">
                  Private beta starts November — limited seats available.
                </p>
              </div>
              
              {/* Early Adopter Benefits */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Gift className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Lifetime Discount</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">Direct Roadmap Influence</span>
                </div>
              </div>
              
              {/* Email Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary"
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                    className="whitespace-nowrap"
                  >
                    {isSubmitting ? "Joining..." : "Get Early Access"}
                  </Button>
                </div>
              </form>
              
              <p className="text-sm text-muted-foreground">
                We'll reach out personally. No spam, ever.
              </p>
            </div>
          </div>
          
          {/* Founding Users Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground italic">
              Founding users get lifetime discount + direct influence on roadmap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};