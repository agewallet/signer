import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

// Components
import Wrapper from "@components/Wrapper";
import Header from "@components/Header";

// Utils
import { push } from "@utils/navigation";

// Config
import * as screens from "@config/screens";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
}

const AddNewWallet: React.FC<Props> = (props) => {
  const { componentId } = props;

  const onPressAction = (screen: string) => (): void => {
    push(componentId, screen);
  };

  return (
    <Wrapper componentId={componentId}>
      <Header title="Add new wallet" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={onPressAction(screens.IMPORT_MNEMONIC)}
          >
            <View style={styles.buttonIconRow} />
            <View style={styles.buttonRow}>
              <Text style={styles.buttonTitle}>Import exists mnemonic</Text>
              <Text style={styles.buttonText}>
                some text some text some text some text
              </Text>
            </View>
            <View style={styles.buttonArrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonOffset]}
            onPress={onPressAction(screens.CREATE_MNEMONIC)}
          >
            <View style={styles.buttonIconRow} />
            <View style={styles.buttonRow}>
              <Text style={styles.buttonTitle}>Create new mnemonic</Text>
              <Text style={styles.buttonText}>
                some text some text some text some text
              </Text>
            </View>
            <View style={styles.buttonArrowIcon} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default AddNewWallet;
