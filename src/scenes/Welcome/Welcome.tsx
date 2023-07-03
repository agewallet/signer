import * as React from "react";
import { View, Text, ScrollView } from "react-native";

// Components
import Wrapper from "@components/Wrapper";
import Header from "@components/Header";
import Button from "@components/Button";

// Utils
import { push } from "@utils/navigation";

// Config
import * as screens from "@config/screens";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
}

const Welcome: React.FC<Props> = (props) => {
  const { componentId } = props;

  const onNext = (): void => {
    push(componentId, screens.ADD_NEW_WALLET);
  };

  return (
    <Wrapper componentId={componentId}>
      <Header title="Welcome" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Welcome to AGE Signer</Text>
          <Text style={styles.description}>
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
            dolor sit amet lorem ipsum dolor sit amet
          </Text>
        </ScrollView>
        <View style={styles.actions}>
          <Button title="Next" onPress={onNext} />
        </View>
      </View>
    </Wrapper>
  );
};

export default Welcome;
