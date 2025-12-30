import Link from 'next/link';
import { Fish, MapPin, Phone, Mail, Facebook, ExternalLink } from 'lucide-react';
import CurrentYear from './ui/CurrentYear';

const footerLinks = {
  waters: [
    { name: 'Rivers', href: '/waters/rivers' },
    { name: 'Canals', href: '/waters/canals' },
    { name: 'Lakes', href: '/waters/lakes' },
    { name: 'Waters A-Z', href: '/waters/a-z' },
  ],
  membership: [
    { name: 'Individual', href: '/membership/individual' },
    { name: 'Club Affiliation', href: '/membership/club-affiliation' },
    { name: 'Yearbook', href: '/membership/yearbook' },
  ],
  matches: [
    { name: 'Match Calendar', href: '/matches/calendar' },
    { name: 'Club Meetings', href: '/matches/meetings' },
    { name: 'Anglers Club', href: '/anglers-club' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-river-950 text-white">
      {/* Wave divider */}
      <div className="relative h-16 -mt-16">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-16 fill-river-950"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.63,69.08,321.39,56.44Z" />
        </svg>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Leeds DASA - Home" className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-sunset-700 rounded-xl">
                <Fish className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight text-white">
                  Leeds DASA
                </span>
                <span className="block text-xs font-medium text-river-300">
                  Amalgamated Society of Anglers
                </span>
              </div>
            </Link>
            <p className="text-river-200 mb-6 max-w-sm leading-relaxed">
              One of the largest and oldest angling associations in England, 
              offering access to over 40 diverse waters across Leeds and the surrounding district.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sunset-500 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-river-200 text-sm">
                  The Anglers Club, 75 Stoney Rock Lane,<br />
                  Beckett Street, Leeds LS9 7TB
                </span>
              </div>
              <a 
                href="mailto:info@leedsdasa.co.uk" 
                className="flex items-center gap-3 text-river-200 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-sunset-500 shrink-0" aria-hidden="true" />
                <span className="text-sm">info@leedsdasa.co.uk</span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="flex items-center justify-center w-10 h-10 bg-river-900 hover:bg-sunset-700 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Waters */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Waters</h3>
            <ul className="space-y-2">
              {footerLinks.waters.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-river-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Membership</h3>
            <ul className="space-y-2">
              {footerLinks.membership.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-river-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Matches & Legal */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Matches</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.matches.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-river-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-display font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-river-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-river-800 mt-12 pt-8">
          <p className="text-river-300 text-sm text-center md:text-left">
            © <CurrentYear /> Leeds and District ASA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

