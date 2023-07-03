import * as React from "react";
import { View, Text, ScrollView } from "react-native";

// Components
import Wrapper from "@components/Wrapper";
import Header from "@components/Header";
import HistoryCard from "@components/HistoryCard";

// Utils
import { push } from "@utils/navigation";

// Config
import * as screens from "@config/screens";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
}

const History: React.FC<Props> = (props) => {
  const { componentId } = props;

  const onViewTx = (): void => {
    push(componentId, screens.TX);
  };

  return (
    <Wrapper componentId={componentId} withTabs activeTab="history">
      <Header title="Signatures history" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.date}>Today</Text>
          <HistoryCard onPress={onViewTx} />
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default History;
