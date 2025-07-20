export interface PageConfig {
  path: string;
  name: string;
  title: string;
  progress: number;
}

export const PAGES_CONFIG: PageConfig[] = [
  {
    path: "/schedule",
    name: "schedule",
    title: "Drone Competition Schedule",
    progress: 0,
  },
  {
    path: "/format-rules",
    name: "format-rules",
    title: "Format & Rules",
    progress: 30,
  },
  {
    path: "/guests-sponsors",
    name: "guests-sponsors",
    title: "Guests & Sponsors",
    progress: 60,
  },
  {
    path: "/leaderboard",
    name: "leaderboard",
    title: "Leaderboard",
    progress: 80,
  },
];

export const getPageConfigByPath = (path: string): PageConfig | null => {
  return PAGES_CONFIG.find((page) => page.path === path) || null;
};

export const getPageConfigByName = (name: string): PageConfig | null => {
  return PAGES_CONFIG.find((page) => page.name === name) || null;
};

export const getPageName = (path: string): string | null => {
  const config = getPageConfigByPath(path);
  return config ? config.name : null;
};
