'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageToggle from '@/components/ui/LanguageToggle';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Our Services' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-primary transition-shadow duration-300 ${
          scrolled ? 'shadow-xl' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-12 h-12">
                <Image
                  src="/assets/logo.png"
                  alt="CNP Community Services"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-white font-heading font-bold text-lg leading-tight">CNP Community</p>
                <p className="text-accent text-sm font-semibold leading-tight">Services</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative group ${
                      isActive ? 'text-accent' : 'text-white hover:text-accent'
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-200 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
              <LanguageToggle />
              <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
                Get In Touch
              </Link>
            </nav>

            <div className="md:hidden flex items-center gap-3">
              <LanguageToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:text-accent transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-primary md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
                <p className="text-white font-heading font-bold">Menu</p>
                <button onClick={() => setIsOpen(false)} className="text-white hover:text-accent transition-colors" aria-label="Close menu">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-2">
                {NAV_LINKS.map(({ href, label }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`px-4 py-3 rounded-lg text-base font-semibold transition-colors duration-200 ${
                        isActive
                          ? 'bg-accent/20 text-accent'
                          : 'text-white hover:bg-white/10 hover:text-accent'
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <Link href="/contact" className="btn-primary w-full text-center text-sm">
                    Get In Touch
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
