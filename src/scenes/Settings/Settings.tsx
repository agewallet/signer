import * as React from "react";
import { View, ScrollView } from "react-native";

// Components
import Wrapper from "@components/Wrapper";
import Header from "@components/Header";
import SettingsCard from "@components/SettingsCard";

// Utils
import { push } from "@utils/navigation";

// Config
import * as screens from "@config/screens";
import { ICONS } from "@config/icons";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
}

const Settings: React.FC<Props> = (props) => {
  const { componentId } = props;

  const openScene = (name: string) => (): void => {
    push(componentId, name);
  };

  return (
    <Wrapper componentId={componentId} withTabs activeTab="settings">
      <Header title="Settings" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <SettingsCard
            title="Security"
            onPress={openScene(screens.SECURITY)}
            color="#454CF9"
            icon={ICONS.security}
          />
          <SettingsCard
            title="Language"
            onPress={openScene(screens.LANGUAGE)}
            color="#F99145"
            icon={ICONS.language}
          />
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Settings;
