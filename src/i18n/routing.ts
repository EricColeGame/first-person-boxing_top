import { defineRouting } from "next-intl/routing";

/**
 * 语言集合的唯一真相源（source of truth）。
 * 与 src/i18n/request.ts 的 messagesMap、src/components/language-switcher.tsx 的
 * LOCALE_LABELS 以及 src/locales/*.json 文件名必须完全一致。
 */
export const locales = ["en", "es", "pt-br", "ja"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];
