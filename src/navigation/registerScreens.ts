import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {withNavigationProvider} from 'react-native-navigation-hooks';

// Config
import * as SceneNames from '@config/scenes';

// Scenes
import * as AppScenes from '@scenes/index';

import ProviderWrapper from './ProvderWrapper';

const registerScreens = async (): Promise<void> => {
  const Screens = new Map();

  // Tabs
  Screens.set(SceneNames.SCAN_TAB, AppScenes.Scan);
  Screens.set(SceneNames.MANAGE_ASSETS_TAB, AppScenes.ManageAssets);
  Screens.set(SceneNames.SIGNATURES_HISTORY_TAB, AppScenes.SignaturesHistory);
  Screens.set(SceneNames.SETTINGS_TAB, AppScenes.Settings);

  // Scenes
  Screens.set(SceneNames.WELCOME, AppScenes.Welcome);
  Screens.set(SceneNames.ADD_NEW_WALLET, AppScenes.AddNewWallet);

  Screens.forEach((C, key) => {
    Navigation.registerComponent(
      key,
      () => gestureHandlerRootHOC(withNavigationProvider(ProviderWrapper(C))),
      () => C,
    );
  });
};

export default registerScreens;
