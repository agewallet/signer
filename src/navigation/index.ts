import { Navigation } from 'react-native-navigation'

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
  })

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
  })
}
