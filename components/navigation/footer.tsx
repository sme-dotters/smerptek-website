import Link from 'next/link';
import { DigitalBloomMark } from '../brand/DigitalBloomLogo';

const footerLinks = {
  Products: [
    { label: 'SMERP EDU', href: '/products/smerp-edu' },
    { label: 'SMERPs Crew', href: '/products/smerps-crew' },
    { label: 'SMERP Automate', href: '/products/smerp-automate' },
    { label: 'SMERPs Analytics', href: '/products/smerps-analytics' },
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
    <footer className="relative bg-bg-dark border-t border-border-subtle overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0 bg-tech-pattern opacity-30" />

      {/* Gradient glow overlay */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial-bloom opacity-5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial-bloom opacity-5 blur-3xl" />

      <div className="relative container-custom py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Digital Bloom Logo and Tagline */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <DigitalBloomMark
                size={40}
                className="transition-transform duration-300 group-hover:scale-110 filter group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]"
              />
              <span className="font-heading font-bold text-xl text-text-primary group-hover:text-gradient-bloom transition-all duration-300">
                SMERP TEK
              </span>
            </Link>
            <p className="text-sm mb-4 font-semibold text-gradient-bloom">
              Clarity. By design.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Empowering startups and SMEs across the UAE and GCC with AI-driven digital transformation solutions.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold text-sm mb-4 text-text-primary relative inline-block">
                {category}
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-bloom" />
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-gradient-bloom transition-all duration-200 inline-block hover:translate-x-1"
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
        <div className="mt-12 pt-8 border-t border-border-subtle">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-text-tertiary">
                © {new Date().getFullYear()} SMERP TEK. All rights reserved.
              </p>
              <div className="hidden md:block w-1 h-1 rounded-full bg-cyan opacity-50" />
              <p className="text-xs text-text-tertiary">
                Powered by <span className="text-gradient-bloom font-semibold">Digital Bloom</span>
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/legal/privacy"
                className="text-sm text-text-tertiary hover:text-cyan transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href="/legal/terms"
                className="text-sm text-text-tertiary hover:text-magenta transition-colors duration-200"
              >
                Terms
              </Link>
              <Link
                href="/legal/cookies"
                className="text-sm text-text-tertiary hover:text-violet transition-colors duration-200"
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
