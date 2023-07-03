import "react-native-gesture-handler";

import { Navigation } from "react-native-navigation";

// Navigation
import { renderScene } from "@navigation/index";
import registerScreens from "@navigation/registerScreens";

// Store
import store from "@store/index";
import { setStatusBarHeight } from "@store/app";

// Config
import * as screens from "@config/screens";

Navigation.events().registerAppLaunchedListener(async () => {
  await registerScreens();

  const { statusBarHeight } = await Navigation.constants();

  store.dispatch(setStatusBarHeight(statusBarHeight));

  renderScene(screens.WELCOME);
});
