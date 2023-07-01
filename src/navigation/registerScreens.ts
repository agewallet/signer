import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {withNavigationProvider} from 'react-native-navigation-hooks';

// Config
import * as SceneNames from '@config/scenes';

// Scenes
import * as AppScenes from '@scenes/index';

const registerScreens = async (): Promise<void> => {
  const Screens = new Map();

  Screens.set(SceneNames.WELCOME, AppScenes.Welcome);

  Screens.forEach((C, key) => {
    Navigation.registerComponent(
      key,
      () => gestureHandlerRootHOC(withNavigationProvider(C)),
      () => C,
    );
  });
};

export default registerScreens;
