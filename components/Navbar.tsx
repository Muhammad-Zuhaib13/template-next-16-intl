'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from '@/i18n/navigation';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const navLinks = [
    { href: `/`, label: t('home') },
    { href: `/about`, label: t('about') },
    { href: `/contact`, label: t('contact') },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/`} className="text-xl font-bold text-gray-900 dark:text-white">
            Next App
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Switch */}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}