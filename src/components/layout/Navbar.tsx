"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'home' | 'services'>('home');
  const pathname = usePathname();

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Propriétés', href: '/properties' },
    { name: 'Services', href: '/#services' },
    { name: 'À propos', href: '/about' },
  ];

  // Gestionnaire de défilement pour basculer dynamiquement entre Accueil et Services
  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        // Si la section services atteint le haut de l'écran (avec une marge de 200px)
        if (rect.top <= 200) {
          setActiveSection('services');
        } else {
          setActiveSection('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Fonction pour déterminer précisément si un lien est actif
  const checkActive = (href: string) => {
    if (pathname !== '/') {
      return pathname === href;
    }
    // Si on est sur la page d'accueil
    if (href === '/') return activeSection === 'home';
    if (href === '/#services') return activeSection === 'services';
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={() => setActiveSection('home')}
          className="text-2xl font-black text-primary tracking-wider"
        >
          IMO
        </Link>

        {/* Navigation Bureau */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = checkActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 transition-colors duration-200 ${
                  isActive ? 'text-accent' : 'text-primary hover:text-accent'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-primary text-white px-5 py-2.5 rounded-xl hover:bg-primary/95 shadow-sm transition-all text-xs font-bold"
          >
            Contact
          </Link>
        </nav>

        {/* Bouton Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-primary focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Rideau Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-neutral-100 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-sm font-bold text-primary">
              {navLinks.map((link) => {
                const isActive = checkActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`py-2 ${isActive ? 'text-accent' : ''}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white text-center py-3 rounded-xl mt-2 text-xs font-bold"
              >
                Contactez-nous
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}