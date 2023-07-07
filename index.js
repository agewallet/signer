import "./shim";
import "react-native-get-random-values";
import "react-native-gesture-handler";

import { Navigation } from "react-native-navigation";

// Navigation
import { renderApp, renderScene } from "@navigation/index";
import registerScreens from "@navigation/registerScreens";

// Store
import store from "@store/index";
import { setStatusBarHeight } from "@store/app";

// Config
import * as screens from "@config/screens";

Navigation.events().registerAppLaunchedListener(async () => {
  await registerScreens();

  const { statusBarHeight } = await Navigation.constants();

  const {
    app: { isOnboardingPassed },
  } = store.getState();

  store.dispatch(setStatusBarHeight(statusBarHeight));

  if (isOnboardingPassed) {
    renderApp();
  } else {
    renderScene(screens.WELCOME);
  }
});
