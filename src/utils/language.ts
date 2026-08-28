import { languages, type Language } from '../config/languages';

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}
