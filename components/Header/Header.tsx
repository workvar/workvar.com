'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { LogoComponent, NavComponent, MobileMenuComponent } from './';

const MobileMenuContext = createContext<{
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});

export const useMobileMenu = () => useContext(MobileMenuContext);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MobileMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled || isMenuOpen
            ? 'bg-stone-50/80 backdrop-blur-md border-stone-200'
            : 'bg-transparent border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <LogoComponent />
            <NavComponent />
            <MobileMenuComponent />
          </div>
        </div>
      </header>
    </MobileMenuContext.Provider>
  );
}

