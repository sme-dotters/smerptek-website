import Link from 'next/link';
import { LogoMark } from '../brand/logo';

const footerLinks = {
  Products: [
    { label: 'SMERP EDU', href: '/products/smerp-edu' },
    { label: 'SMERPs Crew', href: '/products/smerps-crew' },
    { label: 'SMERP Automate', href: '/products/smerp-automate' },
    { label: 'SMERPs Analytics', href: '/products/smerps-analytics' },
    { label: 'MedPro', href: 'https://medpro.smerptek.com' },
  ],
  Solutions: [
    { label: 'Services Overview', href: '/solutions' },
    { label: 'Digital Transformation', href: '/solutions#assess' },
    { label: 'System Integration', href: '/solutions#integrate' },
    { label: 'AI Automation', href: '/solutions#automate' },
  ],
  Resources: [
    { label: 'Blog', href: '/resources/blog' },
    { label: 'Guides & Checklists', href: '/resources/guides' },
    { label: 'Templates', href: '/resources/templates' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Pricing', href: '/pricing' },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-bg-secondary border-t border-border-chrome overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial-accent opacity-10 blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <LogoMark
                size={40}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-heading font-bold text-xl text-text-primary group-hover:text-accent transition-colors duration-300">
                SMERP TEK
              </span>
            </Link>
            <p className="text-sm mb-4 font-semibold text-accent">
              Clarity. By design.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Empowering startups and SMEs across the UAE and GCC with AI-driven digital transformation solutions.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                ⚡ 99.9% Uptime
              </span>
              <span className="px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                🔒 SOC 2 Certified
              </span>
              <span className="px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                🌍 Global CDN
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold text-sm mb-4 text-text-primary relative inline-block">
                {category}
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent" />
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border-chrome">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-text-muted">
                © {new Date().getFullYear()} SMERP TEK. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/legal/privacy"
                className="text-sm text-text-muted hover:text-accent transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href="/legal/terms"
                className="text-sm text-text-muted hover:text-accent transition-colors duration-200"
              >
                Terms
              </Link>
              <Link
                href="/legal/cookies"
                className="text-sm text-text-muted hover:text-accent transition-colors duration-200"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
