import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// Utils
import { setTabIndex } from "@utils/navigation";

// Config
import { bottomTabs } from "@config/navigation";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
  activeTab: string;
}

const BottomTabs: React.FC<Props> = (props) => {
  const { componentId, activeTab } = props;

  const openTab = (index: number) => (): void => {
    setTabIndex(componentId, index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {bottomTabs.map((bottomTab, index) => {
          const { name } = bottomTab;
          const isActive = activeTab === name;

          return (
            <TouchableOpacity
              key={name}
              disabled={isActive}
              activeOpacity={1}
              onPress={openTab(index)}
              style={styles.button}
            >
              <View style={[styles.icon, isActive && styles.activeIcon]} />
              <Text
                style={[styles.title, isActive && styles.activeTitle]}
                numberOfLines={1}
                ellipsizeMode="middle"
              >
                {name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomTabs;
