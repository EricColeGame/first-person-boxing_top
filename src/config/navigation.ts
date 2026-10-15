import type { LucideIcon } from "lucide-react";
import { BookOpen, Code2, Gamepad2, MessagesSquare, Swords, TrendingUp, Users } from "lucide-react";

export interface NavigationItem {
  /** 翻译键（读取 nav.<key> 与顶级 overviewTitle/overviewDescription） */
  key: string;
  /** URL 路径，必须与 content/<locale>/ 下的分类目录名一致 */
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "codes", path: "/codes", icon: Code2, isContentType: true },
  { key: "combat", path: "/combat", icon: Swords, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "controls", path: "/controls", icon: Gamepad2, isContentType: true },
  { key: "modes", path: "/modes", icon: Users, isContentType: true },
  { key: "community", path: "/community", icon: MessagesSquare, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
