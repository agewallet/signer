import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { addScreenshotListener } from "react-native-detector";

// Components
import Wrapper from "@components/Wrapper";
import Header from "@components/Header";
import Button from "@components/Button";

// Navigation
import { renderScene } from "@navigation/index";

// Utils
import { generateMnemonic } from "@utils/wallet";

// Config
import * as screens from "@config/screens";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
}

const CreateMnemonic: React.FC<Props> = (props) => {
  const { componentId } = props;

  const [mnemonic, setMnemonic] = React.useState<string>("");

  React.useEffect(() => {
    const unsubscribe = addScreenshotListener(onScreenshotDetect);

    return () => {
      unsubscribe();
    };
  }, []);

  React.useEffect(() => {
    setMnemonic(generateMnemonic());
  }, []);

  const onScreenshotDetect = (): void => {
    Alert.alert(
      "No screenshots!",
      "It's terribly unsafe. For security purposes, we have created a new mnemonic for you"
    );

    setMnemonic(generateMnemonic());
  };

  const onNext = (): void => {
    renderScene(screens.CREATE_PASSCODE);
  };

  return (
    <Wrapper componentId={componentId}>
      <Header title="Create Mnemonic" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Create Mnemonic</Text>
          <View style={styles.warning}>
            <Text style={styles.warningText}>
              We strongly recommend that you write down your mnemonics only on
              paper
            </Text>
          </View>
          <View style={styles.list}>
            {mnemonic.split(" ").map((word, index) => (
              <View key={index} style={styles.listItem}>
                <TouchableOpacity style={styles.wordRow}>
                  <Text style={styles.word}>{`${index + 1}. ${word}`}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.actions}>
          <Button title="Next" onPress={onNext} />
        </View>
      </View>
    </Wrapper>
  );
};

export default CreateMnemonic;
