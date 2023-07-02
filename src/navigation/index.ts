import {Navigation} from 'react-native-navigation';

// Config
import {bottomTabs} from '@config/navigation';

export const renderApp = () => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
    },
    layout: {
      backgroundColor: 'transparent',
      orientation: ['portrait'],
    },
    animations: {
      setRoot: {
        waitForRender: true,
      },
    },
  });

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: bottomTabs.map(bottomTab => ({
          stack: {
            children: [
              {
                component: {
                  name: bottomTab.name,
                },
              },
            ],
            options: {
              bottomTab,
            },
          },
        })),
        options: {
          bottomTabs: {
            visible: false,
          },
        },
      },
    },
  });
};

export const renderScene = (sceneName: string) => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
    },
    layout: {
      backgroundColor: 'transparent',
      orientation: ['portrait'],
    },
    bottomTabs: {
      visible: false,
    },
    animations: {
      setRoot: {
        waitForRender: true,
      },
    },
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: sceneName,
              options: {},
            },
          },
        ],
      },
    },
  });
};
