import { Navigation } from "react-native-navigation";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { withNavigationProvider } from "react-native-navigation-hooks";

// Config
import * as screens from "@config/screens";

// Scenes
import * as AppScenes from "@scenes/index";

// Modals
import * as AppModals from "@modals/index";

// Navigation
import ProviderWrapper from "@navigation/provderWrapper";

const registerScreens = async (): Promise<void> => {
  const Screens = new Map();

  // Tabs
  Screens.set(screens.SCAN_TAB, AppScenes.Scan);
  Screens.set(screens.MANAGE_ASSETS_TAB, AppScenes.ManageAssets);
  Screens.set(screens.HISTORY_TAB, AppScenes.History);
  Screens.set(screens.SETTINGS_TAB, AppScenes.Settings);

  // Scenes
  Screens.set(screens.WELCOME, AppScenes.Welcome);
  Screens.set(screens.ADD_NEW_WALLET, AppScenes.AddNewWallet);
  Screens.set(screens.TX, AppScenes.Tx);
  Screens.set(screens.ASSET, AppScenes.Asset);
  Screens.set(screens.SECURITY, AppScenes.Security);
  Screens.set(screens.LANGUAGE, AppScenes.Language);
  Screens.set(screens.CREATE_MNEMONIC, AppScenes.CreateMnemonic);
  Screens.set(screens.CREATE_PASSCODE, AppScenes.CreatePasscode);
  Screens.set(screens.IMPORT_MNEMONIC, AppScenes.ImportMnemonic);

  // Modals
  Screens.set(screens.RECEIVE_MODAL, AppModals.Receive);
  Screens.set(screens.SCAN_MODAL, AppModals.Scan);

  Screens.forEach((C, key) => {
    Navigation.registerComponent(
      key,
      () => gestureHandlerRootHOC(withNavigationProvider(ProviderWrapper(C))),
      () => C
    );
  });
};

export default registerScreens;
