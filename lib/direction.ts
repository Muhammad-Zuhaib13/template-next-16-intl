// Define direction types
export type Direction = 'ltr' | 'rtl';

// Locale configuration
export const localeDirection: Record<string, Direction> = {
  en: 'ltr',
  de: 'ltr',
  ar: 'rtl',
};

// Get direction for a specific locale (server-safe)
export function getDirection(locale: string): Direction {
  return localeDirection[locale] || 'ltr';
}

// Check if locale is RTL
export function isRTLLocale(locale: string): boolean {
  return getDirection(locale) === 'rtl';
}

// Get direction for all available locales
export function getAllDirections(): Record<string, Direction> {
  return localeDirection;
}