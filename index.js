import 'react-native-gesture-handler';

import {Navigation} from 'react-native-navigation';

// Navigation
import {renderScene} from '@navigation/index';
import registerScreens from '@navigation/registerScreens';

// Config
import * as scenes from '@config/scenes';

Navigation.events().registerAppLaunchedListener(async () => {
  await registerScreens();

  renderScene(scenes.WELCOME);
});
