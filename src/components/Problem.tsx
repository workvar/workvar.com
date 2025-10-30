import { AlertCircle, Zap } from "lucide-react";

export const Problem = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Problem Statement */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              You're great at what you do.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              But your day is fragmented — context switches, endless tabs, 
              shallow interruptions. The work isn't the problem.{" "}
              <span className="text-foreground font-semibold">The noise around it is.</span>
            </p>
          </div>
          
          {/* Pain Points & Solutions */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {/* Pain Point 1 */}
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border space-y-4">
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
            </div>
            
            {/* Pain Point 2 */}
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border space-y-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};