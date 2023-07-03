import {
  Navigation,
  Options,
  OptionsBottomTabs,
} from "react-native-navigation";

// Config
import { IS_ANDROID } from "@config/platform";

export const pop = (componentId: string) => {
  Navigation.pop(componentId);
};

export const popTo = (componentId: string) => {
  Navigation.popTo(componentId);
};

export const push = (
  componentId: string,
  name: string,
  passProps = {},
  options: Options = {}
) => {
  Navigation.push(componentId, {
    component: {
      name,
      passProps,
      options: {
        popGesture: true,
        animations: {
          push: {
            waitForRender: true,
          },
        },
        bottomTabs: {
          visible: false,
        },
        ...options,
      },
    },
  });
};

export const showModal = (
  name: string,
  passProps = {},
  options: Options = {}
) => {
  Navigation.showModal({
    component: {
      name,
      passProps,
      options: {
        bottomTabs: {
          visible: false,
        },
        ...options,
      },
    },
  });
};

export const dismissModal = (componentId: string) => {
  Navigation.dismissModal(componentId);
};

export const mergeOptions = (componentId: string, options: Options = {}) => {
  Navigation.mergeOptions(componentId, options);
};

export const popToRoot = (componentId: string, options: Options = {}) => {
  Navigation.popToRoot(componentId, options);
};

export const setTabIndex = (
  componentId: string,
  currentTabIndex: number
): void => {
  const bottomTabs: OptionsBottomTabs = {
    currentTabIndex,
  };

  if (IS_ANDROID) {
    bottomTabs.visible = false;
  }

  mergeOptions(componentId, {
    bottomTabs,
  });
};
