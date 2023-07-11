import * as React from "react";
import { View, Text, ScrollView, Alert } from "react-native";

// Components
import Wrapper from "@components/Wrapper";
import Header from "@components/Header";
import RecoveryForm from "@components/RecoveryForm";
import Button from "@components/Button";

// Utils
import { push } from "@utils/navigation";
import { validateMnemonic } from "@utils/wallet";

// Config
import * as screens from "@config/screens";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
}

const ImportMnemonic: React.FC<Props> = (props) => {
  const { componentId } = props;

  const [mnemonic, setMnemonic] = React.useState<string[]>([]);

  const onNext = (): void => {
    if (!validateMnemonic(mnemonic.join(" "))) {
      Alert.alert("Mnemonic is not valid");
    } else {
      push(componentId, screens.CREATE_PASSCODE);
    }
  };

  return (
    <Wrapper componentId={componentId}>
      <Header title="Import Mnemonic" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Import Mnemonic</Text>
          <RecoveryForm
            words={mnemonic}
            updateWords={setMnemonic}
            label="Enter 24 words"
          />
        </ScrollView>
        <View style={styles.actions}>
          <Button
            title="Next"
            onPress={onNext}
            disabled={mnemonic.length !== 24}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default ImportMnemonic;
