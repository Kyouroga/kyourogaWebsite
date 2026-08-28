import type { SupportedLanguage } from '../i18n';

export function languagePath(language: SupportedLanguage, path = '/'): string {
  return `/${language}${path === '/' ? '' : path}`;
}
