import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es' | 'fr' | 'en';

function isAvailableLocale(locale: string | null): AvailableLocale{
  if(locale === null) return 'es';
  const validLocales: Record<string, AvailableLocale> = {
    es: 'es',
    en: 'en',
    fr: 'fr',
  };

  return validLocales[locale] ?? 'es';
}

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private currentLocale = signal<AvailableLocale>('es');

  constructor() {
    const storedLocale = localStorage.getItem('locale')
    this.currentLocale.set(isAvailableLocale(storedLocale));
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: AvailableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
