export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "First Person Boxing Wiki",
  shortName: "First Person Boxing",
  logoText: "FPB",
  tagline: "Controls, Combat Mechanics, Counters & Beginner Guides",
  description: "Learn First Person Boxing strategies, controls, combat mechanics, stamina management, guards, counters, and beginner tips to improve your fights and master the ring.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://first-person-boxing.top",
  supportEmail: "support@first-person-boxing.top",
  gameUrl: "https://www.roblox.com/games/132956556682909/First-Person-Boxing",
  heroVideoId: "AldbTGIADGg", // First Person Boxing (Roblox) first-person gameplay showcase
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
