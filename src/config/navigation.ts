// Config
import * as SceneNames from '@config/scenes';

export type TBottomTab = {
  name: string;
  icon?: number;
};

export const bottomTabs: TBottomTab[] = [
  {
    name: SceneNames.SCAN_TAB,
  },
  {
    name: SceneNames.MANAGE_ASSETS_TAB,
  },
  {
    name: SceneNames.SIGNATURES_HISTORY_TAB,
  },
  {
    name: SceneNames.SETTINGS_TAB,
  },
];

export const getTabIndex = (name: string): number => {
  return bottomTabs.findIndex((tab: TBottomTab) => tab.name === name);
};
