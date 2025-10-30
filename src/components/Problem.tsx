import { AlertCircle, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Problem = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              You're great at what you do.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              But your day is fragmented — context switches, endless tabs, 
              shallow interruptions. The work isn't the problem.{" "}
              <span className="text-foreground font-semibold">The noise around it is.</span>
            </p>
          </motion.div>
          
          {/* Pain Points & Solutions */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {/* Pain Point 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-xl p-8 shadow-soft border border-border space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-destructive/10">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Context Switching Kills Flow</h3>
                  <p className="text-muted-foreground">
                    Every notification, every tab, every ping pulls you away from deep work
                  </p>
                </div>
              </div>
              <div className="pl-16 pt-2 border-l-2 border-primary/30 ml-6">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    <span className="font-semibold">We auto-hide distractions</span> so you never have to context switch again
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Pain Point 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-card rounded-xl p-8 shadow-soft border border-border space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-destructive/10">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Manual Work Drains Energy</h3>
                  <p className="text-muted-foreground">
                    Too many tabs, too many tools, too much manual coordination
                  </p>
                </div>
              </div>
              <div className="pl-16 pt-2 border-l-2 border-primary/30 ml-6">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    <span className="font-semibold">We eliminate busywork</span> so you focus only on what matters
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};