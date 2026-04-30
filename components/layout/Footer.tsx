import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/assets/logo.png"
                  alt="CNP Community Services"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-lg leading-tight">CNP Community</p>
                <p className="text-accent text-sm font-semibold">Services</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Empowering individuals with developmental disabilities to live meaningful, independent lives through personalized support and community inclusion.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/cnptreasures/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/cnpcommunityservices/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>239 Main St<br />West Orange, NJ 07052</span>
              </li>
              <li>
                <a href="mailto:programs@mycnpservices.com" className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent transition-colors">
                  <Mail size={16} className="text-accent flex-shrink-0" />
                  programs@mycnpservices.com
                </a>
              </li>
              <li>
                <a href="tel:+19737311101" className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent transition-colors">
                  <Phone size={16} className="text-accent flex-shrink-0" />
                  973-731-1101
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            Copyright &copy; 2023 CNP Services, LLC — All Rights Reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Serving New Jersey with pride
          </p>
        </div>
      </div>
    </footer>
  );
}
