// Define language type
export interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName?: string; // Optional native name
  dir?: 'ltr' | 'rtl';
}

// Available languages configuration
export const languages: Language[] = [
  { 
    code: 'en', 
    name: 'English', 
    flag: '🇺🇸',
    nativeName: 'English',
    dir: 'ltr'
  },
  { 
    code: 'de', 
    name: 'Deutsch', 
    flag: '🇩🇪',
    nativeName: 'Deutsch',
    dir: 'ltr'
  },
  { 
    code: 'ar', 
    name: 'العربية', 
    flag: '🇸🇦',
    nativeName: 'العربية',
    dir: 'rtl'
  },
];

// Helper functions
export function getLanguageByCode(code: string): Language | undefined {
  return languages.find(lang => lang.code === code);
}

export function getLanguageNames(): Record<string, string> {
  return languages.reduce((acc, lang) => {
    acc[lang.code] = lang.name;
    return acc;
  }, {} as Record<string, string>);
}

export function getLanguageFlags(): Record<string, string> {
  return languages.reduce((acc, lang) => {
    acc[lang.code] = lang.flag;
    return acc;
  }, {} as Record<string, string>);
}

export function getAvailableLocales(): string[] {
  return languages.map(lang => lang.code);
}