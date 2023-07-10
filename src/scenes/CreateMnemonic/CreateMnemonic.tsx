import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { useDispatch } from "react-redux";

// Components
import Wrapper from "@components/Wrapper";
import Header from "@components/Header";
import Button from "@components/Button";

// Navigation
import { renderApp } from "@navigation/index";

// Utils
import { generateMnemonic } from "@utils/wallet";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
}

const CreateMnemonic: React.FC<Props> = (props) => {
  const { componentId } = props;

  const [mnemonic, setMnemonic] = React.useState<string>("");

  const dispatch = useDispatch();

  React.useEffect(() => {
    setMnemonic(generateMnemonic());
  }, []);

  const onNext = (): void => {
    renderApp();
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
              This Privacy Policy was last updated on 9th of March 2021.
            </Text>
          </View>
          <View
            style={{ marginTop: 12, flexWrap: "wrap", flexDirection: "row" }}
          >
            {mnemonic.split(" ").map((word, index) => (
              <View key={index} style={{ padding: 8 }}>
                <Text style={[styles.word]}>{`${index + 1}. ${word}`}</Text>
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
