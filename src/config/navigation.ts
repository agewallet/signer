// Config
import * as screens from "@config/screens";

export type TBottomTab = {
  name: string;
  icon?: number;
};

export const bottomTabs: TBottomTab[] = [
  {
    name: screens.SCAN_TAB,
  },
  {
    name: screens.MANAGE_ASSETS_TAB,
  },
  {
    name: screens.HISTORY_TAB,
  },
  {
    name: screens.SETTINGS_TAB,
  },
];

export const getTabIndex = (name: string): number => {
  return bottomTabs.findIndex((tab: TBottomTab) => tab.name === name);
};
