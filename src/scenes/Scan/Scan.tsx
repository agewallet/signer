import * as React from "react";
import { View, ScrollView } from "react-native";

// Components
import Wrapper from "@components/Wrapper";
import Header from "@components/Header";
import ActionCard from "@components/ActionCard";

// Utils
import { showModal } from "@utils/navigation";

// Screens
import * as screens from "@config/screens";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
}

const Scan: React.FC<Props> = (props) => {
  const { componentId } = props;

  const onScan = (): void => {
    showModal(screens.SCAN_MODAL);
  };

  return (
    <Wrapper componentId={componentId} withTabs activeTab="scan">
      <Header title="Scan" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <ActionCard
            text="Some text to scan. Some text to scan. Some text to scan"
            button={{
              title: "Scan",
              onPress: onScan,
            }}
          />
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Scan;
