import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles, Gift } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

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
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gradient-hero to-background opacity-50" />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isVisible ? { scale: 1, opacity: 0.05 } : {}}
        transition={{ duration: 1.2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-primary blur-3xl rounded-full"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-subtle rounded-3xl p-8 md:p-12 shadow-glow border border-primary/20"
          >
            <div className="space-y-8 text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isVisible ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex p-4 rounded-2xl bg-gradient-primary shadow-glow"
              >
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              </motion.div>
              
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-3xl md:text-4xl font-bold">
                  Join the Private Beta
                </h2>
                <p className="text-lg text-muted-foreground">
                  Private beta starts November — limited seats available.
                </p>
              </motion.div>
              
              {/* Early Adopter Benefits */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                >
                  <Gift className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Lifetime Discount</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
                >
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">Direct Roadmap Influence</span>
                </motion.div>
              </motion.div>
              
              {/* Email Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                onSubmit={handleSubmit}
                className="max-w-md mx-auto"
              >
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
              </motion.form>
              
              <p className="text-sm text-muted-foreground">
                We'll reach out personally. No spam, ever.
              </p>
            </div>
          </motion.div>
          
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