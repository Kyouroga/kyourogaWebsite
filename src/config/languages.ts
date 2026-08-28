export const languages = ['en', 'jp'] as const;

export type Language = (typeof languages)[number];
