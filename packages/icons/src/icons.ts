export const icons = {
  close: "close-icon",
  menu: "menu-icon",
  search: "search-icon",
} as const;

export type IconName = keyof typeof icons;
