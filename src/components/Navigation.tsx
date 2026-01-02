'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface NavigationProps {
  currentPage?: 'home' | 'designs' | 'about' | 'contact';
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/designs', label: 'Designs', page: 'designs' },
    { href: '/about', label: 'About', page: 'about' },
    { href: '/contact', label: 'Contact', page: 'contact' },
  ];

  return (
    <nav 
      className={`sticky top-4 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'top-2' : 'top-4'}`} 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`bg-white/95 backdrop-blur-md rounded-2xl md:rounded-full px-6 py-3 ${isMobileMenuOpen ? 'pb-4' : ''} transition-all duration-300 border border-[#B3CFE5]/20 ${isScrolled ? 'shadow-xl' : 'shadow-lg'}`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30 rounded-full p-1 -m-1" 
              aria-label="Sai Manjari Home"
            >
              <div className="bg-[#B3CFE5] rounded-full p-2 md:p-4 mr-2 md:mr-4 transition-transform group-hover:scale-105 shadow-lg overflow-hidden">
                <div className="relative h-8 w-8 md:h-12 md:w-12 overflow-hidden rounded-full">
                  <Image 
                    src="/Logo.png" 
                    alt="Sai Manjari Logo" 
                    fill
                    className="object-cover rounded-full scale-150"
                    style={{ objectPosition: 'center center' }}
                    priority
                  />
                </div>
              </div>
              <span className="text-lg md:text-2xl font-display font-bold text-[#000000] group-hover:text-[#000000] transition-colors uppercase tracking-wide">
                SAI MANJARI
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  href={link.href}
                  className={`px-8 py-3 rounded-full text-lg font-bold uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B3CFE5]/30 ${
                    currentPage === link.page
                      ? 'bg-[#B3CFE5]/20 text-[#000000] font-extrabold'
                      : 'text-[#000000] hover:text-[#000000] hover:bg-[#B3CFE5]/10'
                  }`}
                  aria-current={currentPage === link.page ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href="https://maps.app.goo.gl/xFqm5zbTWXgeaQk19" 
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 bg-[#B3CFE5] text-[#000000] px-6 py-3 rounded-full text-lg font-bold uppercase tracking-wide hover:bg-[#B3CFE5]/80 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B3CFE5]/30"
                aria-label="Find our location on Google Maps"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Locate Me
              </a>
              <Link 
                href="/admin/login" 
                className="ml-2 bg-[#B3CFE5]/20 rounded-full p-2.5 text-[#000000] hover:bg-[#B3CFE5]/30 hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B3CFE5]/30"
                aria-label="Admin Login"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden bg-[#B3CFE5]/20 rounded-full p-2.5 text-[#000000] hover:bg-[#B3CFE5]/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B3CFE5]/30"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div 
              id="mobile-menu"
              className="md:hidden mt-4 pt-4 border-t border-[#B3CFE5]/20 animate-fade-in"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    href={link.href}
                    className={`px-5 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B3CFE5]/30 ${
                      currentPage === link.page
                        ? 'bg-[#B3CFE5]/20 text-[#000000] font-extrabold'
                        : 'text-[#000000] hover:text-[#000000] hover:bg-[#B3CFE5]/10'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={currentPage === link.page ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
                <a 
                  href="https://maps.app.goo.gl/xFqm5zbTWXgeaQk19" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B3CFE5] text-[#000000] px-5 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-[#B3CFE5]/80 transition-all duration-200 flex items-center justify-center gap-2 shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B3CFE5]/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Find our location on Google Maps"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Locate Me
                </a>
                <Link 
                  href="/admin/login" 
                  className="bg-[#B3CFE5]/20 text-[#000000] hover:bg-[#B3CFE5]/30 px-5 py-3 rounded-full text-sm font-bold uppercase tracking-wide text-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B3CFE5]/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
