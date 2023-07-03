import * as React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

// Components
import Wrapper from "@components/Wrapper";
import Header from "@components/Header";

// Utils
import { showModal } from "@utils/navigation";

// Config
import * as screens from "@config/screens";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
  name: string;
  symbol: string;
}

const Asset: React.FC<Props> = (props) => {
  const { componentId, name, symbol } = props;

  const onReceive = (): void => {
    showModal(screens.RECEIVE_MODAL, {
      name,
      symbol,
      address: "0x.000",
    });
  };

  return (
    <Wrapper componentId={componentId}>
      <Header title={`${name} (${symbol})`} />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            style={{ padding: 20, margin: 20, backgroundColor: "red" }}
            onPress={onReceive}
          >
            <Text>Receive</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Asset;
