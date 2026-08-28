import type { SupportedLanguage } from './types';

export function loadContent(language: SupportedLanguage): Record<string, unknown> {
  return { language };
}
