export const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo/Brand */}
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                WorkVar
              </h3>
              <p className="text-sm text-muted-foreground">
                A quiet system for deep work
              </p>
            </div>
            
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} WorkVar. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};