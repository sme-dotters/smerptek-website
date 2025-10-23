'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { LogoMark } from '../brand/logo';
import Image from 'next/image';

const navLinks = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/products', label: 'Products' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-400/80 backdrop-blur-2xl shadow-luxury'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group relative">
            <div className="relative">
              {/* Animated glowing effect */}
              <div className="absolute inset-0 bg-gradient-purple-pink rounded-full blur-xl opacity-40 animate-glow-pulse" />
              <div className="absolute inset-0 bg-gradient-blue-purple rounded-full blur-2xl opacity-30 animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
              <Image
                src="/logo.png"
                alt="SMERP TEK"
                width={50}
                height={50}
                className="relative z-10 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
              />
            </div>
            <span className="font-display font-bold text-2xl text-white">
              SMERP <span className="bg-gradient-luxury bg-clip-text text-transparent">TEK</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-purple-pink group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Link href="/contact">
              <button className="relative px-8 py-3 font-bold rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-purple-pink" />
                <span className="relative z-10 text-white">Get Started</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-400/95 backdrop-blur-2xl border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full relative px-8 py-4 font-bold rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-purple-pink" />
                <span className="relative z-10 text-white">Get Started</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
